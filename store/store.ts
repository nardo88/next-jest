//

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import toolKitSlice from './reducer/counter'

const rootReduser = combineReducers({
  toolkit: toolKitSlice,
})

const store = configureStore({
  reducer: rootReduser,
})

export type StateType = ReturnType<typeof store.getState>

export default store

//
