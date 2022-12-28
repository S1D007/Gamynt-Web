import { configureStore } from '@reduxjs/toolkit'
import clubnavReducer from './clubchatnavslice'

export const store = configureStore({
  reducer: {
    handlenav:clubnavReducer
  },
})