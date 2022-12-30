import { configureStore } from '@reduxjs/toolkit'
import clubnavReducer from './reducers/clubchatnavslice'
import otpReducers from "./reducers/otpSlice"
export const store = configureStore({
  reducer: {
    handlenav:clubnavReducer,
    otp:otpReducers
  },
})