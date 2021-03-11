# 字符串脱敏处理 formatToMask 

## 方法介绍
### 1、同步or异步
> **同步方法**

### 2、使用场景
> 部分敏感信息，业务场景需脱敏展示，以保证一定的安全性。

## 使用案例
```js
import { formatToMask } from 'my-utils'

// 手机号
const tel = formatToMask({ str: '13711112222', type: 'tel' }) // tel -> '137******22'

// 姓名
const name = formatToMask({ str: '张三', type: 'name' }) // name -> '张*'

// 地址
const address = formatToMask({ str: '城西一里1号202室', type: 'address' }) // address -> '城西一里*号***室'

// 银行卡号
const bankNo = formatToMask({ str: '6723121143314423', type: 'bankNo' }) // bankNo -> '6723********4423'

// 身份证号
const id = formatToMask({ str: '342324199101229900', type: 'id' }) // id -> '3****************0'
```

## 参数列表
### 入参
| 序号 | 名称 | 类型 | 是否必须 | 备注 |
| --- | --- | --- | --- | --- |
| 1 | opts | obj | 是 | 入参 |
| 2 | opts.str | string | 是 | 需要处理的字符串 |
| 3 | opts.beginLen | int | 否 | 字符串前面保留位数 |
| 4 | opts.endLen | int | 否 | 字符串后面保留位数 |
| 5 | opts.replaceKey | string | 否 | 替换为什么字符，默认为“*”|
| 6 | opts.type | string | 否 | 掩码类型 （姓名：name，手机号：tel，地址：address，银行卡号：bankNo）|

### 返回值
| 序号 | 名称 | 类型 | 备注 |
| --- | --- | --- | --- |
| 1 | - | string | 掩码处理后的字符串 |