/* eslint-disable linebreak-style */
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import todos from './todos';

const rootReducer = combineReducers({
  todos,
});

const persistConfig = {key: 'todos', storage: storage, whitelist: ['todos']};
const rootReducerWithPersist = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducerWithPersist,
  middleware: [
    ...getDefaultMiddleware(),
    logger,
  ],
});

export const persistor = persistStore(store);
