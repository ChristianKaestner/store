import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/slice';
import cartSlice from './cart/slice';
import modalSlice from './modal/slice';
import filtersSlice from './filters/slice';
import { productsApi } from './services/products';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['items'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    cart: persistReducer(cartPersistConfig, cartSlice),
    modal: modalSlice,
    filters: filtersSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productsApi.middleware),
  ],
});

export const persistor = persistStore(store);
