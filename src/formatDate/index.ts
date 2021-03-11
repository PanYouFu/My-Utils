/**
 * @param
 *  date - 时间戳
 *  type - 返回参数格式
 * @returns
 *  YYYY年MM月DD日（默认）
 *  YYYY/MM/DD
 *  YYYY-MM-DD
 *  YYYY年M月D日
 *  YYYY/M/D
 *  YYYY-M-D
 * @example
 * ```js
 * import { formatDate } from 'my-utils'
 * const datestamp = new Date().getTime()
 * const date = formatDate(datestamp)
 * ```
 *
 * @remarks
 * 默认返回YYYY年MM月DD天格式
 *
 * @beta
 */
function formatDate (datestamp: number, type?: string): string {
  const date = new Date(datestamp)
  const oYear = date.getFullYear()
  const oMonth = date.getMonth() + 1
  const oDay = date.getDate()
  let returnDate = ''
  switch (type) {
  case 'YYYY/MM/DD':
    returnDate = oYear + '/' + getzf(oMonth) + '/' + getzf(oDay)
    break
  case 'YYYY-MM-DD':
    returnDate = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay)
    break
  case 'YYYY/M/D':
    returnDate = oYear + '/' + oMonth + '/' + oDay
    break
  case 'YYYY-M-D':
    returnDate = oYear + '-' + oMonth + '-' + oDay
    break
  case 'YYYY年M月D日':
    returnDate = oYear + '-' + oMonth + '-' + oDay
    break
  default:
    returnDate = oYear + '年' + getzf(oMonth) + '月' + getzf(oDay) + '日'
    break
  }
  return returnDate
}

function getzf (num: number) {
  let str = num.toString()
  if (num < 10) {
    str = '0' + str
  }
  return str
}

export default formatDate
