import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { timingSafeEqual } from 'crypto';

class App extends Component {
   constructor(){
     super();
     this.state ={
       name: '',
       lastName: ''
     }
   }
   handleName = (changeName) => {
     this.setState({
       name: changeName.target.value
     });
   }
   handleLastName = (changeLastName) => {
     this.setState({
      lastName: changeLastName.target.value
     });
   }

  render() {
    return (
      <div className="App">
        <h4>Formulario</h4> <br></br>
        <div>
          <label>Nombre:&nbsp; </label>
          <input type='text' onChange={changeName => this.handleName(changeName)}/> &nbsp;
          <label>Apellidos:&nbsp; </label>
          <input type='text' onChange={changeLastName => this.handleLastName(changeLastName)}/>
        </div>
        <div>
          {this.state.name} {this.state.lastName}
        </div>
      </div>
    );
  }
}

export default App;
