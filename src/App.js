import React, { Component } from 'react';
import './App.css';
import Square from './componentes/square';

class App extends Component{
  render() {
    return(
      <div className='Container'>
        <Square color='blue' />
      </div>
      
    )
  }
}



export default App;
