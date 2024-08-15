import { configureStore } from '@reduxjs/toolkit'
import counterSlide from './slider/counterSlide'

export const store = configureStore({
  reducer: {
    counter: counterSlide,
  },
})