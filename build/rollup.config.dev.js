const baseConfig = require('./rollup.config.base');
const serve = require('rollup-plugin-serve');

const { name } = require('../package.json');

module.exports = {
  ...baseConfig,
  output: [
    {
      file: `dist/${name}.js`,
      format: 'umd',
      name,
      sourcemap: true,
    },
    {
      file: `dist/${name}.cjs.js`,
      format: 'cjs',
      name,
      sourcemap: 'inline',
    },
    {
      file: `dist/${name}.esm.js`,
      format: 'es',
      name,
      sourcemap: true,
    }
  ],
  plugins: [
    ...baseConfig.plugins,
    // serve({
    //   port: 8080,
    //   contentBase: ['']
    // })
  ]
};
