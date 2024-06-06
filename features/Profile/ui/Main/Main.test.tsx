import { render } from '@testing-library/react'
import { Main } from './Main'

describe('test Profile', () => {
  test('first', () => {
    render(<Main />)
    expect(true).toBe(true)
  })
})
