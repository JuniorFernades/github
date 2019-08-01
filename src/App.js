import React, { Component } from 'react';
import './App.css';
import PlacarCasa from './componentes/placar-casa';
import PlacarVisitante from './componentes/placar-visitante';
import Search from './componentes/search';


class App extends Component {

  constructor () {
    super()
    this.state ={
      placarVisitante: 0,
      placarCasa:0
    }
  }
  
  render() {
    console.log('render')
    return(
      <div>
        <PlacarCasa onClick={() => this.setState({ placarCasa: this.state.placarCasa + 1})} placar={this.state.placarCasa} />
        <PlacarVisitante onCLick={() => this.setState({placarVisitante: this.state.placarVisitante + 1})} placar={this.state.placarVisitante}/>
        <Search />
      </div>
    )
  }
}

export default App