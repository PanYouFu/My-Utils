
/** 金额千分位格式化
   * @param money : 金额
   * @param decimals : 设置保留几位小数, 如果不传则不处理小数
   * @param isRounding : 是否四舍五入，默认为 true
   * @param separator : 千分位符号，默认为‘,’
   * */
function formatMoney (money: string, decimals?: number, isRounding?: boolean, separator?: string): string {
  if (!money) return money
  // 如果n传入的是数字，则根据指定的数字保留小数位数，不指定则默认小数位数和当前数字保持一致
  if (typeof decimals === 'number') {
    decimals = decimals > 0 && decimals <= 20 ? decimals : 0
  } else {
    decimals = money.toString().split('.')[1] ? money.toString().split('.')[1].length : 0
  }
  money = parseFloat((money + '').replace(/[^\d.-]/g, '')) + ''
  money = isRounding !== false ? Number(money).toFixed(Number(decimals)) : money.toString().substring(0, money.toString().indexOf('.') + Number(decimals) + 1)
  const l = money.toString().split('.')[0].split('').reverse()
  const r = decimals ? '.' + money.toString().split('.')[1] : '' // 保留小数的返回小数点格式化
  let t = ''
  separator = separator || ','
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? separator : '')
  }
  return t.split('').reverse().join('') + r
}

export default formatMoney
