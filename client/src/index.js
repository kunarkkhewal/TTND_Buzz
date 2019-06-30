import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider> 
  ,
  document.getElementById('root')
);
