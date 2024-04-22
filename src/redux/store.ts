import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import commonReducer from './common';
import themeReducer from './theme';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  common: commonReducer,
  theme: themeReducer,
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
