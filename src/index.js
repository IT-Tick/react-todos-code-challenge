import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './pages/index';
import {store} from './components/redux/store';
import {Provider} from 'react-redux';


ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <IndexPage />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
