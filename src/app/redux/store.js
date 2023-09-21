import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/slice';
import cartSlice from './cart/slice';
import modalSlice from './modal/slice';
import filtersSlice from './filters/slice';
import { goodsApi } from './services/goods';
import { categoriesApi } from './services/categories';
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
    [goodsApi.reducerPath]: goodsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(goodsApi.middleware, categoriesApi.middleware),
  ],
});

export const persistor = persistStore(store);
