import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import Header from './Components/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
