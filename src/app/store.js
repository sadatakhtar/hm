// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import initialReducer from '../features/initialSlice';

const store = configureStore({
  reducer: {
    initial: initialReducer,
  },
});

export default store;
