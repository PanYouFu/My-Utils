import { series } from 'gulp'
import path from 'path'
import fse from 'fs-extra'
import chalk from 'chalk'
import { rollup, watch } from 'rollup'
import {
  Extractor,
  ExtractorConfig,
  ExtractorResult,
} from '@microsoft/api-extractor'
import conventionalChangelog from 'conventional-changelog'
import rollupDevConfig from './build/rollup.config.dev'
import rollupPrdConfigs from './build/rollup.config.prod'

interface TaskFunc {
  (cb: ()=> void): void
}

const log = {
  progress: (text: string) => {
    console.log(chalk.green(text))
  },
  error: (text: string) => {
    console.log(chalk.red(text))
  },
}

const paths = {
  root: path.join(__dirname, '/'),
  dist: path.join(__dirname, '/dist'),
  src: path.join(__dirname, '/src'),
}

// 删除 lib 文件
const clearLibFile: TaskFunc = async (cb) => {
  fse.removeSync(paths.dist)
  log.progress('Deleted dist file')
  cb()
}

// rollup 打包 prd
const buildPrdByRollup: TaskFunc = async (cb) => {
  rollupPrdConfigs.forEach(async (config) => {
    const inputOptions = {
      input: config.input,
      plugins: config.plugins,
    }
    const outOptions = config.output
    const bundle = await rollup(inputOptions)
    if (Array.isArray(outOptions)) {
      outOptions.forEach(async (outOption) => {
        await bundle.write(outOption)
        apifunc('build')
      })
      cb()
    }
  })
  log.progress('Rollup prd built successfully')
}


const watchByRollup: TaskFunc = async (cb) => {
  const inputOptions = {
    input: rollupDevConfig.input,
    plugins: rollupDevConfig.plugins,
  }
  const outputOptions = rollupDevConfig.output

  const watchOptions = {
    ...inputOptions,
    output: outputOptions,
    watch: {
      include: ['src/**/*.ts'],
      exclude: ['node_modules/**'],
    },
  }

  const watcher = watch(watchOptions)

  watcher.on('event', event => {
    log.progress(`打包中...${event.code}`)
    if (event.code === 'END') {
      log.progress('合并声明文件...')
      apifunc('watch')
    }
  })
  cb()
}

const apifunc = async (type: string) => {
  const apiExtractorJsonPath: string = path.join(__dirname, './api-extractor.json')
  // 加载并解析 api-extractor.json 文件
  const extractorConfig: ExtractorConfig = await ExtractorConfig.loadFileAndPrepare(apiExtractorJsonPath)
  // 判断是否存在 mian.d.ts 文件，这里必须异步先访问一边，不然后面找不到会报错
  const isExist: boolean = await fse.pathExists(extractorConfig.mainEntryPointFilePath)

  if (!isExist) {
    log.error('API Extractor not find main.d.ts')
    return
  }

  // 调用 API
  const extractorResult: ExtractorResult = await Extractor.invoke(extractorConfig, {
    localBuild: true,
    // 在输出中显示信息
    showVerboseMessages: true,
  })

  if (extractorResult.succeeded) {
    // 删除多余的 .d.ts 文件
    const libFiles: string[] = await fse.readdir(paths.dist)
    libFiles.forEach(async file => {
      if (!file.includes('.') || file.includes('main')) {
        await fse.remove(path.join(paths.dist, file))
      }
    })

    log.progress('API Extractor completed successfully')
    if (type === 'watch') {
      log.progress('Waitting for changes...')
    }
  } else {
    log.error(`API Extractor completed with ${extractorResult.errorCount} errors` + ` and ${extractorResult.warningCount} warnings`)
  }
}

const wait: TaskFunc = (cb) => {
  log.progress('waiting for changes---')
  cb()
}

const complete: TaskFunc = (cb) => {
  log.progress('---- end ----')
  cb()
}

// 构建过程
// 1. 删除 lib 文件夹
// 2. rollup 打包
// 3. api-extractor 生成统一的声明文件, 删除多余的声明文件
// 4. 完成

export const build = series(clearLibFile, buildPrdByRollup, complete)

export const watchChanges = series(clearLibFile, watchByRollup, wait)

// 自定义生成 changelog
export const changelog: TaskFunc = async (cb) => {
  const changelogPath: string = path.join(paths.root, 'CHANGELOG.md')
  // 对命令 conventional-changelog -p angular -i CHANGELOG.md -w -r 0
  const changelogPipe = await conventionalChangelog({
    preset: 'angular',
    releaseCount: 0,
  })
  changelogPipe.setEncoding('utf8')

  const resultArray = ['# 公共方法库更新日志\n\n']
  changelogPipe.on('data', (chunk) => {
    // 原来的 commits 路径是进入提交列表
    chunk = chunk.replace(/\/commits\//g, '/commit/')
    resultArray.push(chunk)
  })
  changelogPipe.on('end', async () => {
    await fse.createWriteStream(changelogPath).write(resultArray.join(''))
    cb()
  })
}

