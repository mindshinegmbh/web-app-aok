import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import commonReducer from './common';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  common: commonReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  const store = configureStore({
    reducer: {
      common: commonReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  });
  sagaMiddleware.run(sagas);
  return store;
}

export const store = setupStore({});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
