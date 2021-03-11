
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
