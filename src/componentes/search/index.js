import React, { Component } from 'react'

import './style.css'

export default class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: '',
        items: [],
      }
    }
  
    onInputChange(e) {
      this.setState({
        inputValue: e.target.value,
      });
    }
  
    addItem() {
      let items = this.state.items;
      items.unshift(this.state.inputValue);
      this.setState({items, inputValue:''});
    }
  
    listItems() {
      let items = this.state.items;
      return (
        <ul>
          {
            items.map((val, index) => {
              return (
                <article key={index}>
                  <p>{ val }</p>
                </article>
              );
            })
          }
        </ul>
      );
    }
  
    render() {
      return (
        <div className='searchContent'>
          <input placeholder='Digite um comentario' id="myInput" type="text" value={this.state.inputValue} onChange={ (e) => this.onInputChange(e) } />
          <div className="buttonCad">
            <button onClick={ () => this.addItem() }>ADICIONAR COMENTARIO</button>
          </div>
          <div className='comentarios'>
            { this.listItems() }
          </div>
        </div>
      );
    }
  }