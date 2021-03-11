import formatBankNo from '../index'

describe('validate:', () => {
  describe('formatBankNo 验证', () => {
    test('123412341234123', () => {
      expect(formatBankNo('123412341234123')).toBe('1234 1234 1234 123')
    })
  })
})

