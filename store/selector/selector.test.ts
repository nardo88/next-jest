import { getValue } from './selector'

describe('test selector', () => {
  test('first', () => {
    expect(getValue({ toolkit: { count: 1 } })).toBe(1)
  })
  test('empty', () => {
    expect(getValue()).toBe(0)
  })
})

//
