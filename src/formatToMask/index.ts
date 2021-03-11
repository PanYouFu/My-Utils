
/**
 * 关键信息隐藏
 * @param str 字符串
 * @param beginLen 字符串前面保留位数
 * @param endLen 字符串后面保留位数
 * @param replaceKey 替换为什么字符，默认为“*”
 * @param type 掩码类型 （姓名：name，手机号：tel，地址：address，银行卡号：bankNo，身份证号：id）
 * @returns {string}
 */
interface Opts {
  str: string;
  frontLen?: number;
  endLen?: number;
  replaceKey?: string;
  type?: string;
}
function formatToMask (opts: Opts):string {
  let { str, frontLen, endLen, replaceKey = '*', type } = opts
  const strLen = str.length
  if (strLen <= 0) {
    return ''
  }
  // let frontLen = opts.frontLen;
  // let endLen = opts.endLen;
  // let replaceKey = opts.replaceKey || '*';
  // 若frontLen和endLen都为空则进行默认脱敏方式
  if ((!frontLen && frontLen !== 0) && (!endLen && endLen !== 0)) {
    switch (type) {
    case 'name':
      // 姓名 仅保留第一位中文字符
      frontLen = 1
      endLen = 0
      break
    case 'tel':
      // 手机、住宅电话 仅保留前3后2位
      frontLen = 3
      endLen = 2
      break
    case 'address':
      // 地址 涉及小区后面门牌号中数字进行脱敏
      return str.replace(/[0-9]/ig, replaceKey)
    case 'bankNo':
      // 银行卡号 仅保留前4后4位
      frontLen = 4
      endLen = 4
      break
    case 'id':
      // 身份证 仅显示首、尾各1位
      frontLen = 1
      endLen = 1
      break
    default :
      return str
    }
  }
  frontLen = frontLen || 0
  endLen = endLen || 0
  const replaceLen = strLen - frontLen - endLen
  replaceKey = new Array(replaceLen + 1).join(replaceKey)
  return str.substring(0, frontLen) + replaceKey + str.substring(strLen - endLen)
}

export default formatToMask
