// libraries
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// async page components
const AsyncHomePage = React.lazy(() => import('pages/Home'));
const AsyncNotFoundPage = React.lazy(() => import('pages/NotFound'));
const AsyncHelloPage = React.lazy(() => import('pages/Hello'));
const AsyncSignUpPage = React.lazy(() => import('pages/SignUp'));

export enum ROUTE_NAMES {
  ERROR_OR_NOT_FOUND = '*',
  HOME = '/',
  LOGIN = '/hello',
  SIGN_UP = '/join',
  USER = '/my'
}

export const router = createBrowserRouter([
  {
    path: ROUTE_NAMES.HOME,
    element: <AsyncHomePage />,
    errorElement: <AsyncNotFoundPage />
  },
  {
    path: ROUTE_NAMES.LOGIN,
    element: <AsyncHelloPage />
  },
  {
    path: ROUTE_NAMES.SIGN_UP,
    element: <AsyncSignUpPage />
  }
]);
