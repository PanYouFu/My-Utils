
/**
 * @param bankNo - 输入正确的银行卡号字符串
 * @returns 返回四位间隔的银行卡格式字符串
 * @example
 * ```js
 * import { formatBankNo } from 'my-utils'
 * const bankNo = formatBankNo('661723452876123')
 * ```
 *
 * @remarks
 * 目前只支持一种格式，四位间隔
 *
 * @beta
 */
function formatBankNo (bankNo: string): string {
  const testRegexp = /^\d+$/g
  let str = ''

  if (!testRegexp.test(bankNo)) {
    throw new SyntaxError('请输入正确的银行卡号')
  } else {
    str = bankNo.replace(/\s/g, '').replace(/(\w{4})(?=\w)/g, '$1 ')
  }
  return str
}

export default formatBankNo
