import formatMoney from '../index'
describe('formatMoney', () => { // 分组
  test('formatMoney_01', () => { // 测试用例
    // money: Number, decimals?: Number,isRounding?: Boolean, separator?: String
    expect(formatMoney('13331.3245', 3, false, '，')).toBe('13，331.324')
  })
  test('formatMoney_02', () => {
    expect(formatMoney('13331.3245', 3, false)).toBe('13,331.324')
  })
  test('formatMoney_03', () => {
    expect(formatMoney('13331.3245', 3)).toBe('13,331.325')
  })
  test('formatMoney_04', () => {
    expect(formatMoney('13331.3245', 5)).toBe('13,331.32450')
  })
  test('formatMoney_05', () => {
    expect(formatMoney('13331.3245', 3, false)).toBe('13,331.324')
  })
  test('formatMoney_06', () => {
    expect(formatMoney('13331.3245')).toBe('13,331.3245')
  })
  test('formatMoney_07', () => {
    expect(formatMoney('13332341.3245')).toBe('13,332,341.3245')
  })
})
