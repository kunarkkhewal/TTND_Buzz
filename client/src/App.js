import React, { Component } from 'react';
import './App.css';
import Router from './Routes';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    )
  }
}
export default App;
