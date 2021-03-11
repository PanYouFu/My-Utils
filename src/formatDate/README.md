# 日期格式化 formatDate

## 方法介绍
### 1、同步or异步
> **同步方法**

### 2、使用场景
> 对获取到的时间信息（时间戳），进一步转换成特定的格式

## 使用案例
```js
import { formatDate } from 'my-utils'

// 默认返回 YYYY年MM月DD日
const date = formatDate(1592750681959) // date -> '2020年06月21日'

// 返回 YYYY/MM/DD
const date = formatDate(1592750681959, 'YYYY/MM/DD') // date -> '2020/06/21'

// 返回 YYYY-MM-DD
const date = formatDate(1592750681959) // date -> '2020-06-21'

// 返回 YYYY年M月D日
const date = formatDate(1592750681959) // date -> '2020年6月21日'

// 返回 YYYY/M/D
const date = formatDate(1592750681959) // date -> '2020-6-21'

// 返回 YYYY-M-D
const date = formatDate(1592750681959) // date -> '2020-6-21'

```

## 参数列表
### 入参
| 序号 | 名称 | 类型 | 是否必须 | 备注 |
| --- | --- | --- | --- | --- |
| 1 | date | Date | 是 | 时间戳 |
| 2 | type | string | 否 | **返回日期格式类型** <br> 默认：YYYY年MM月DD日    <br>可选值：<br>YYYY/MM/DD<br>YYYY-MM-DD<br>YYYY年M月D日<br>YYYY/M/D<br>YYYY-M-D |


### 返回值
| 序号 | 名称 | 类型 | 备注 |
| --- | --- | --- | --- |
| 1 | - | string | 日期格式化之后的字符串 |
