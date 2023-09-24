'use client';

import { useState, useEffect } from 'react';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from '../components/loader/loader';

export default function ReduxProvider({ children }) {
  const [reduxLoaded, setReduxLoaded] = useState(false);
  const [startDisappearing, setStartDisappearing] = useState(false);

  useEffect(() => {
    const checkIfReduxLoaded = () => {
      if (persistor.getState().bootstrapped) {
        setStartDisappearing(true);
        setTimeout(() => {
          setReduxLoaded(true);
        }, 1000);
      } else {
        setTimeout(checkIfReduxLoaded, 100);
      }
    };

    checkIfReduxLoaded();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        {!reduxLoaded ? (
          <Loader startDisappearing={startDisappearing} />
        ) : (
          <>{children}</>
        )}
      </PersistGate>
    </Provider>
  );
}

// export default function ReduxProvider({ children }) {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={<Loader />} persistor={persistor}>
//         {children}
//       </PersistGate>
//     </Provider>
//   );
// }
