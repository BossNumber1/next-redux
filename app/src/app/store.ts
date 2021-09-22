import counterReducer from '../features/counter/counterSlice'
import { configureStore } from '@reduxjs/toolkit'

export function makeStore() {
  return configureStore({
    reducer: { counter: counterReducer },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
