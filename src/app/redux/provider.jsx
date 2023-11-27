'use client';

import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LoaderRedux from '@/app/components/loading/reduxLoader';

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoaderRedux />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
