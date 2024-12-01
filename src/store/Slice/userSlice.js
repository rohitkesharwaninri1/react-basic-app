///counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'user',
  initialState: {
    name: "",
  },
  reducers: {
    handleSaveName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { handleSaveName } = counterSlice.actions;

export default counterSlice.reducer;
