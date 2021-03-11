# 金额格式化 formatMoney

## 方法介绍
### 1、同步or异步
> **同步方法**

### 2、使用场景
> 对金额进行千分位分割、小数点等处理

## 使用案例
```js
import { formatMoney } from 'my-utils'

// 千分位 中文逗号 分割，保留三位小数，不四舍五入
const money = formatMoney('13331.3245', 3, false, '，') // money -> '13，331.324'

// 千分位 默认英文逗号 分割，保留三位小数，不四舍五入
const money = formatMoney('13331.3245', 3, false)) // money -> '13,331.324'

// 千分位 默认英文逗号 分割，保留三位小数，四舍五入
const money = formatMoney('13331.3245', 3) // money -> '13,331.325'

// 千分位 默认英文逗号 分割，保留五位小数，四舍五入
const money = formatMoney('13331.3245', 5) // money -> '13,331.32450'
  
// 千分位 默认英文逗号 分割，保留所有小数
const money = formatMoney('13331.3245') // money -> '13,331.3245'
const money = formatMoney('13332341.3245') // money -> '13,332,341.3245'

```

## 参数列表
### 入参
| 序号 | 名称 | 类型 | 是否必须 | 备注 |
| --- | --- | --- | --- | --- |
| 1 | money | string | 是 | 需要处理的数字 |
| 2 | decimals | int | 否 | 保留几位小数|
| 3 | isRounding | bool | 否 | 是否四舍五入，默认为true |
| 4 | thousandsSeparator | string | 否| 千分位符号，默认为‘,’ |

### 返回值
| 序号 | 名称 | 类型 | 备注 |
| --- | --- | --- | --- |
| 1 | - | string | 千分位格式化后的字符串 |
