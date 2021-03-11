
function getUrlParameter (param: string):string {
  const reg = new RegExp('[&,?,&amp;]' + param + '=([^\\&|\\#]*)', 'i')
  const value = reg.exec(location.href)
  return decodeURIComponent(decodeURIComponent(value ? value[1] : ''))
}

export default getUrlParameter
