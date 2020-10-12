/* eslint-disable linebreak-style */
import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';
import {store} from './_redux_store';

import App from './App';
import './index.scss';

render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
