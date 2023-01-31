// libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
// components
import { Spinner } from 'components/Spinner';
// constants
import { router } from 'constants/routes';
// redux
import { store } from 'store/configureStore';
// styles
import 'assets/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <React.Suspense fallback={<Spinner />}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </React.Suspense>
  </React.StrictMode>
);
