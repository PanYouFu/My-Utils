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
