import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/slice';
import productsSlice from './products/slice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productsSlice,
  },
});
