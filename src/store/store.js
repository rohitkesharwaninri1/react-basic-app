import { configureStore } from '@reduxjs/toolkit'
import pokeReducer from './Slices/pokeSlice'

export const store = configureStore({
  reducer: {
    pokeData: pokeReducer,
  },
})