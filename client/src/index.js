import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path ="/" component={App}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
