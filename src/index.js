import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import IndexPage from './pages/index';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <IndexPage />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);
