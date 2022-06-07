import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore(
  {
    reducer: {},
  }
  //   middleware
);

export type RootState = ReturnType<typeof store.getState>;
export default store;
