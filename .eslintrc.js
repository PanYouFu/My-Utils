module.exports = {
  //此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  // 此项指定环境的全局变量
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  // 此项是用来配置标准的js风格
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard'
  ],
  //此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
  parser: '@typescript-eslint/parser',
  plugins: [
    'markdown',
    'jest',
    '@typescript-eslint'
  ],
  // 对所有ts文件设置规则
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none'}],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 2,
      }
    }
  ],
  rules: {
    // 使用 interface 而不是 type
    "@typescript-eslint/consistent-type-definitions":["error","interface"],
    "comma-dangle":[2,"always-multiline"],
    "no-unused-expressions":2,
    "operator-linebreak":[2,"after"],
    "no-extra-semi":0,"semi":[2,"never"],
    "indent":[2,2],
    "no-multi-spaces":2,
    "no-trailing-spaces":2,
    "space-infix-ops":2,
    "key-spacing":[
      2,
      {
        "beforeColon":false,
        "afterColon":true
      }
    ],
    "object-curly-spacing":[2,"always"],
    "comma-spacing":2,
    "no-unused-vars":[2,{"vars":"all","args":"after-used"}],
    "eqeqeq":2,
    "no-spaced-func":2,
    "space-before-function-paren":[2,"always"],
    "spaced-comment":2,
    "eol-last":2,
    "no-multiple-empty-lines":[2,{"max":2}],"no-var":2,
    "no-extra-parens":2,
    "no-mixed-spaces-and-tabs":[2,true],
    "no-unneeded-ternary":2,
    "semi-spacing":[2,{"before":false,"after":true}],
    "max-len":[0,{"code":120}],
    "id-length":[0,{"min":1,"max":20}]
  }
}