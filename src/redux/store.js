"use client";

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { authApi } from './reducers/auth/authApi';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}