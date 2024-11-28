// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice.ts';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Define RootState and AppDispatch types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
