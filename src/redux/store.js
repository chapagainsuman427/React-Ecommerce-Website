import { configureStore } from '@reduxjs/toolkit';
import someReducer from './reducers/someReducer'; // Adjust the import path

const store = configureStore({
  reducer: someReducer, // Use someReducer as the root reducer
  devTools: process.env.NODE_ENV !== 'production', // Enable DevTools only in development mode
});

export default store;
