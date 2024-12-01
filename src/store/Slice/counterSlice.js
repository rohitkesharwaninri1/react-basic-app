///counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    incrementBy10 : (state) => {
      state.value += 10;
    }
  },
});

export const { increment, decrement, incrementByAmount, incrementBy10 } = counterSlice.actions;

export default counterSlice.reducer;
