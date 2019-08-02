import React, { Component } from 'react';
import './App.css';
import Search from './componentes/search';
import Header from './componentes/header';
import Placar from './componentes/placar';
import Info from './componentes/info';


class App extends Component {

  constructor () {
    super()
    this.state ={
      placarVisitante: 0,
      placarCasa:0
    }
  }
  
  render() {
    return(
        <div className='wrapper'>
          <Header />
          <div className='container'>
          <Placar 
            onClick={() => this.setState({ placarCasa: this.state.placarCasa + 1})} 
            titulo='Casa' 
            time='Confiança' 
            placar={this.state.placarCasa} 
          />

          <Info />

          <Placar 
            onClick={() => this.setState({ placarVisitante: this.state.placarVisitante + 1})} 
            titulo='visitante' 
            time='Sergipe' 
            placar={this.state.placarVisitante} 
          />
        </div>
        <div className="search">
          <Search />
        </div>
        </div>
    )
  }
}

export default App