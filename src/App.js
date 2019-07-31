import React, { Component } from 'react';
import './App.css';
import Timer from './componentes/timer';


class App extends Component {
  constructor () {
    super()
    this.state = {
      showTimer:true
    }
  }

  render() {
    console.log('render')
    return(
      <div>
        {this.state.showTimer && <Timer />}
        <button onClick={() => this.setState({showTimer: !this.state.showTimer})}>Show hide/timer</button>
      </div>
    )
  }
}

export default App