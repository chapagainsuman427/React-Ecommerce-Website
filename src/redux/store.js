import { configureStore } from '@reduxjs/toolkit';
import { storeSlice } from './storeSlice';

//import someReducer from './reducers/someReducer'; // Adjust the import path


const ecommerceStore = configureStore({
  reducer: { 
    store: storeSlice.reducer
  }, // Use someReducer as the root reducer
  devTools: process.env.NODE_ENV !== 'production', // Enable DevTools only in development mode
});

export default ecommerceStore;
