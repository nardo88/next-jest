//

import { render } from '@testing-library/react'
import { Main } from './Main'
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'
import { createMockrouter } from '../../../../helpers/tests/useRouter'

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { id: '123' },
  }),
}))

describe('test Profile', () => {
  test('first', () => {
    render(
      <RouterContext.Provider value={createMockrouter({})}>
        <Main />
      </RouterContext.Provider>
    )
    expect(true).toBe(true)
  })
})

//
