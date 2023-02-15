// libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ConfigProvider } from 'antd';
// components
import Wrapper from 'components/Wrapper';
// constants
import { router } from 'constants/routes';
// redux
import { store } from 'store/configureStore';
// styles
import { theme } from 'assets/theme';
import 'assets/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <React.Suspense>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ConfigProvider theme={theme}>
            <Wrapper>
              <RouterProvider router={router} />
            </Wrapper>
          </ConfigProvider>
        </PersistGate>
      </Provider>
    </React.Suspense>
  </React.StrictMode>
);
