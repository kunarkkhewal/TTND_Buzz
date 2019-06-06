import React, { Component } from 'react';
import queryString from 'query-string';
import logo from './logo.svg';
import './App.css';
import Router from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router/>
      </div>
    ) 
  }
}
export default App;
