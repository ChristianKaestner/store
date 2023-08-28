import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/slice';
import goodsSlice from './goods/slice';
import modalSlice from './modal/slice';
import { goodsApi } from './services/goods';
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

const goodsPersistConfig = {
  key: 'goods',
  storage,
  whitelist: ['cart', 'favorite'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    goods: persistReducer(goodsPersistConfig, goodsSlice),
    modal: modalSlice,
    [goodsApi.reducerPath]: goodsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(goodsApi.middleware),
  ],
});

export const persistor = persistStore(store);
