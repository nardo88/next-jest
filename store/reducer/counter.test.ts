//

import counterReducer, { decrement, increment } from './counter'

describe('reducer', () => {
  test('increment', () => {
    expect(counterReducer({ count: 10 }, increment())).toEqual({ count: 11 })
  })
  test('increment empty', () => {
    expect(counterReducer(undefined, increment())).toEqual({ count: 1 })
  })
  test('decrement', () => {
    expect(counterReducer({ count: 10 }, decrement())).toEqual({ count: 9 })
  })
  test('decrement empty', () => {
    expect(counterReducer(undefined, decrement())).toEqual({ count: -1 })
  })
})

//
