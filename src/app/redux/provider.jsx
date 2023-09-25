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
    let reduxTimer;
    let disappearingTimer;

    const checkIfReduxLoaded = () => {
      const now = performance.now();

      if (persistor.getState().bootstrapped) {
        if (now >= 3000) {
          setStartDisappearing(true);
          disappearingTimer = setTimeout(() => {
            setReduxLoaded(true);
          }, 1000);
        } else {
          reduxTimer = setTimeout(() => {
            setStartDisappearing(true);
            disappearingTimer = setTimeout(() => {
              setReduxLoaded(true);
            }, 1000);
          }, 3000 - now);
        }
      } else {
        setTimeout(checkIfReduxLoaded, 100);
      }
    };

    checkIfReduxLoaded();

    return () => {
      clearTimeout(reduxTimer);
      clearTimeout(disappearingTimer);
    };
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
