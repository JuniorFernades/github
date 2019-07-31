import React, { Component } from 'react';
import './App.css';
import Square from './componentes/square';
import Button from './componentes/button';


class App extends Component {

  constructor () {
    console.log('constructor')
    super()
    this.state = {
      color: 'red'
    }
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  componentDidMount () {
    console.log('componentDidMount')
  }
  
  render() {
    console.log('render')
    return(
      <div>
        <Square color={this.state.color} />

        {['green', 'red', 'purple', 'black', 'gold', 'gray'].map((color, index) => (
          <Button key={index} onClick={() => this.setState({ color })}>{color}</Button>
        ))}
        
      </div>
    )
  }
}

export default App