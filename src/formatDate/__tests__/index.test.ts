import formatDate from '../index'

describe('validate:', () => {
  describe('验证方法 formatDate', () => {
    test('获取当前日期', () => {
      expect(formatDate(1592750681959)).toEqual('2020年06月21日')
    })
  })
})

