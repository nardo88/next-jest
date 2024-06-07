import { useDispatch, useSelector } from 'react-redux'
import { getValue } from '../../store/selector/selector'
import { increment, decrement } from '../../store/reducer/counter'

export const Counter = () => {
  const dispatch = useDispatch()
  const value = useSelector(getValue)

  const incrementHandler = () => {
    dispatch(increment())
  }
  const decrementHandler = () => {
    dispatch(decrement())
  }
  return (
    <div>
      <div data-testid="value">{value}</div>
      <div>
        <button data-testid="increment" onClick={incrementHandler}>
          increment
        </button>
        <button data-testid="decrement" onClick={decrementHandler}>
          decrement
        </button>
      </div>
    </div>
  )
}
