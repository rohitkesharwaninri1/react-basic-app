
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {},
}

export const counterSlice = createSlice({
  name: 'poke',
  initialState,
  reducers: {
    storePokeData: (state, action) => {
      state.data = action.payload
    },
  },
})

export const {storePokeData } = counterSlice.actions

export default counterSlice.reducer