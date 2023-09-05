'use client';

import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

//need to add loader component
export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
