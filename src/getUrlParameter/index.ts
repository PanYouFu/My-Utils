
/**
   * 获取url?或#后参数方法
   * @example: http://xxx.com?a=P001#test?b=P002
   *     Result:  getUrlParameter('a')  // 'P001'
   *     Result:  getUrlParameter('b')  // 'P002'
   */
function getUrlParameter (param: string):string {
  const reg = new RegExp('[&,?,&amp;]' + param + '=([^\\&|\\#]*)', 'i')
  const value = reg.exec(location.href)
  return decodeURIComponent(decodeURIComponent(value ? value[1] : ''))
}

export default getUrlParameter
