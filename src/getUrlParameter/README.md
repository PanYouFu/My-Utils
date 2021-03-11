# 获取 URL 参数字段 getUrlParameter 

## 方法介绍
### 1、同步or异步
> **同步方法**

### 2、使用场景
> 获取当前页面 URL 中 ? 或 # 后参数方法

## 使用案例
```js
import { getUrlParameter } from 'my-utils'
const getUrlParameter = getUrlParameter('parameter1')

// 当前页面地址：http://xxx.com?a=P001#test?b=P002
const a = getUrlParameter('a') // a -> 'P001'

const b = getUrlParameter('b') // b -> 'P002'

```

## 参数列表
### 入参
| 序号 | 名称 | 类型 | 是否必须 | 备注 |
| --- | --- | --- | --- | --- |
| 1 | name | string | 是 |  获取参数名称 |

### 返回值
| 序号 | 名称 | 类型  |  备注 |
| --- | --- | --- | --- |
| 1 | - | - | url?或#后参数值 |
