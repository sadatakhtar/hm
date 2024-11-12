// src/features/authenticationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { uid, email, displayName } = action.payload;
      state.user = { uid, email, displayName };
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

// Export the actions
export const { setUser, clearUser } = authenticationSlice.actions;

// Export the selector
export const getUser = (state) => state.authentication.user;

// Export the reducer
export default authenticationSlice.reducer;