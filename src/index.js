import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './pages/index';
import { Provider } from "react-redux"
import store from "./redux/store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <IndexPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
