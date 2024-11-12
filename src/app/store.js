import { configureStore } from '@reduxjs/toolkit';
import initialReducer from '../features/initialSlice';
import authenticationReducer from '../features/authenticationSlice';

const store = configureStore({
  reducer: {
    initial: initialReducer,
    authentication: authenticationReducer,
  },
});

export default store;
