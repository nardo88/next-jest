//

import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { userEvent } from '@testing-library/user-event'
import { Counter } from './Counter'
import store from '../../store/store'

test('Counter component', async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Counter />
    </Provider>
  )

  const incrementBtn = getByTestId('increment')
  expect(getByTestId('value')).toHaveTextContent('0')
  await userEvent.click(incrementBtn)
  expect(getByTestId('value')).toHaveTextContent('1')
})

//
