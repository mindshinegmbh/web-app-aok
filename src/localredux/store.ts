import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import themeReducer from './theme';
import sessionReducer from './session';
import sagas from './sagas';

import { enableMapSet } from 'immer'

enableMapSet()

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  theme: themeReducer,
  session: sessionReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export function setupStore() {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  });
  sagaMiddleware.run(sagas);
  return store;
}

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
