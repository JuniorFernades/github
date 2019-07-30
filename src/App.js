import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      nome: 'nome inicial'
    }
  }

  render () {
    return(
      <div onClick={() => (this.setState({
        nome: 'nome alterado quando clicado'
      }))}>{this.state.nome}</div>
    )
  }
}

export default App