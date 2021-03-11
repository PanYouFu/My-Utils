import formatToMask from '../index'

describe('formatToMask:', () => {
  test('formatToMask_01', () => { // 测试用例
    expect(formatToMask({ str: '13711112222', type: 'tel' })).toBe('137******22')
  })
  test('formatToMask_02', () => { // 测试用例
    expect(formatToMask({ str: '张三', type: 'name' })).toBe('张*')
  })
  test('formatToMask_03', () => { // 测试用例
    expect(formatToMask({ str: '城西一里1号202室', type: 'address' })).toBe('城西一里*号***室')
  })
  test('formatToMask_04', () => { // 测试用例
    expect(formatToMask({ str: '6723121143314423', type: 'bankNo' })).toBe('6723********4423')
  })
  test('formatToMask_05', () => { // 测试用例
    expect(formatToMask({ str: '342324199101229900', type: 'id' })).toBe('3****************0')
  })
})

