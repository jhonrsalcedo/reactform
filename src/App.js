import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Formulario</h4>
        <div>
          <label>Name:</label>
          <input type='text'/>
          <label>Apellido:</label>
          <input type='text'/>
        </div>
      </div>
    );
  }
}

export default App;
