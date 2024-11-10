// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    test: 'Hello world'
}

const initialSlice = createSlice({
  name: 'initial',
  initialState,
  reducers: {
   setTest: (state, action) => {
    state.test = action.payload;
  },
}
});

// Export the actions
export const { setTest } = initialSlice.actions;

// Export the selector
export const getTest = (state) => state.initial.test;

// Export the reducer
export default initialSlice.reducer;
