import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './pages/index';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './redux/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducer, composeEnhancers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <IndexPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
