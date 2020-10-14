import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './reducers';

function configureStore() {
    const rootReducer = combineReducers(reducers);
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(logger))
    );
}

const store = configureStore();

export default store;
