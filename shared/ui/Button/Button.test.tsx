import { render } from '@testing-library/react'
import { Button } from './Button'

describe('test btn', () => {
  test('render', () => {
    const foo = () => {}
    render(<Button onClick={foo}>test</Button>)
    expect(true).toBe(true)
  })
})
