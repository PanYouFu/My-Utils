const path = require('path');
const alias = require('rollup-plugin-alias');
const { nodeResolve } = require('@rollup/plugin-node-resolve'); //加载查找外部模块
const rollupTypescript = require('rollup-plugin-typescript2');
const { babel } = require('@rollup/plugin-babel');
const { eslint } = require('rollup-plugin-eslint');
const commonjs = require('rollup-plugin-commonjs');
const replace = require('rollup-plugin-replace');
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
