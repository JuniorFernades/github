import React, { Component } from 'react'

class Timer extends Component {
    constructor () {
        super()
        this.state = {
            timer: 0
        }
    }

    //metodo render
    render () {
        <div>Timer: {this.state.timer}</div>
    }
}

export default Timer