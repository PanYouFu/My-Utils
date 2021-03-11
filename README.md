-utils 前端公共方法库

> 此文档包含，使用方式，公共方法列表，changelog

## 使用方式

#### 安装依赖

切换私服

```js
npm set registry http://10.181.4.80:4765/
```

安装方法库

```
npm install -utils
```

#### 浏览器引入

在浏览器中使用 `script` 和 `link` 标签直接引入文件，我们在 npm 发布包内的 `i-utils/dist` 目录下提供了 `-utils.js`、`-utils.min.js `

#### 模块导入

##### 全局引用

```js
import Utils from '-utils' // 引入

console.log(Utils.formatBankNo('12345678231123')) // 使用
```

##### 按需引入

```js
import { formatBankNo } from '-utils' // 引入

console.log(formatBankNo('12345678231123')) // 使用
```

## 公共方法

#### 列表

| 方法          | 说明              |
| ------------- | ----------------- |
| getUrlParameter  | 获取 URL 参数字段 |
| formatToMask  | 字符串脱敏处理    |
| formatMoney  | 金额格式化处理    |
| formatBankNo | 银行卡格式化      |
| formatDate   | 日期格式化        |


# changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.0.9](https://github.paic.com.cn/FE/h5_utils/compare/v0.0.8...v0.0.9) (2020-06-22)


### Features

* 🎸 新增金额格式化、字符串脱敏、获取url参数方法 ([7ed045e](https://github.paic.com.cn/FE/h5_utils/commit/7ed045e384b580963d7d9c5974f4ec0effdaf5cc))


### [0.0.8](https://github.paic.com.cn/FE/h5_utils/compare/v0.0.7...v0.0.8) (2020-06-22)

### [0.0.7](https://github.paic.com.cn/FE/h5_utils/compare/v0.0.6...v0.0.7) (2020-06-20)

### 0.0.6 (2020-06-20)

### Features

* 🎸 新增银行卡格式化方法 ([b3f0b37](https://github.paic.com.cn/FE/h5_utils/commit/b3f0b371e6350af20b751528f7209f7d3f5180a9))
* 优化项目打包 ([63af9bb](https://github.paic.com.cn/FE/h5_utils/commit/63af9bb5c535ce40c89367547160ac1aca584e7e))
* 新建项目 ([8fd45b8](https://github.paic.com.cn/FE/h5_utils/commit/8fd45b8676f47450c48a4b1741b4a7b51b2814ff))

### Bug Fixes

* **formatdate:** 修复单元测试bug ([1909699](https://github.paic.com.cn/FE/h5_utils/commit/190969952354fbb8ad3e2fee2b57ce7be44c6fcc))

### 0.0.5 (2020-06-20)

### Features

* 🎸 新增银行卡格式化方法 ([b3f0b37](https://github.paic.com.cn/FE/h5_utils/commit/b3f0b371e6350af20b751528f7209f7d3f5180a9))
* 优化项目打包 ([63af9bb](https://github.paic.com.cn/FE/h5_utils/commit/63af9bb5c535ce40c89367547160ac1aca584e7e))
* 新建项目 ([8fd45b8](https://github.paic.com.cn/FE/h5_utils/commit/8fd45b8676f47450c48a4b1741b4a7b51b2814ff))


### Bug Fixes

* **formatdate:** 修复单元测试bug ([1909699](https://github.paic.com.cn/FE/h5_utils/commit/190969952354fbb8ad3e2fee2b57ce7be44c6fcc))


