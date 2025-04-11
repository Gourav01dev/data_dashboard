import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { dashboardApi } from './services/dashboardApi';
import dashboardReducer from './slices/dashboardSlice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dashboardApi.middleware),
});


setupListeners(store.dispatch);

