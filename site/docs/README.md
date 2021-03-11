# 使用方式

## 安装依赖

切换npm服务器（淘宝镜像）

```js
npm set registry ********
```

安装方法库

```
npm install my-utils
```

## 浏览器引入

在浏览器中使用 `script` 和 `link` 标签直接引入文件，我们在 npm 发布包内的 `phi-utils/dist` 目录下提供了 `my-utils.js`、`my-utils.min.js `

## 模块导入

### 全局引用

```js
import Utils from 'my-utils' // 引入

console.log(Utils.formatBankNo('12345678231123')) // 使用
```

### 按需引入

```js
import { formatBankNo } from 'my-utils' // 引入

console.log(formatBankNo('12345678231123')) // 使用
```