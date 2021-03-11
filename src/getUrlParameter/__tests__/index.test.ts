import getUrlParameter from '../index'
describe('getUrlParameter', () => {
  test('one', () => {
    expect(getUrlParameter('name')).toBe('')
  })
  test('two', () => {
    expect(getUrlParameter('name1')).toBe('')
  })
})


