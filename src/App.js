import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import Header from './components/Header';
import Product from './components/Product';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Product />
        
      </div>
    );
  }
}

export default App;
