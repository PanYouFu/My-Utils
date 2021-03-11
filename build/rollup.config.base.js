const path = require('path');
const alias = require('rollup-plugin-alias');
const { nodeResolve } = require('@rollup/plugin-node-resolve'); // 加载查找外部模块
const rollupTypescript = require('rollup-plugin-typescript2'); // 支持TS
const { babel } = require('@rollup/plugin-babel');
const { eslint } = require('rollup-plugin-eslint');
const commonjs = require('rollup-plugin-commonjs'); // ES6模块的查找导入，但是npm中的大多数包都是以CommonJS模块的形式出现的，所以需要使用这个插件将CommonJS模块转换为 ES2015 供 Rollup 处理
const replace = require('rollup-plugin-replace'); // 变量替换，可以将动态设置的变量提取出来在配置文件中设置
const { DEFAULT_EXTENSIONS } = require('@babel/core');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

const babelOptions = {
  extensions: [ 
    ...DEFAULT_EXTENSIONS,
    '.ts'
  ],
  presets: ['@babel/preset-env'],
  exclude: [
    'node_modules/**',
    'src/**/*.test.ts'
  ]
}

module.exports = {
  input: resolveFile('src/my-utils.ts'),
  plugins: [
    nodeResolve({
      extensions: ['.js', '.ts']
    }),
    alias({
      resolve: ['.js', '.ts']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: 'node_modules/**'
    }),
    eslint({
      throwOnError: true, // lint 结果有错误将会抛出异常
      throwOnWarning: true,
      include: ['src/**/*.js', 'src/**/*.ts']
    }),
    rollupTypescript(),
    babel(babelOptions)
  ]
}
