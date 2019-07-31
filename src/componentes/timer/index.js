import React, { Component } from 'react'

class Timer extends Component {
    constructor () {
        super()
        this.state = {
            time: 0
        }
    }

    //executa como o componente é montado
    componentDidMount () {
        this.timer = setInterval(() => this.setState({ time: this.state.time + 1}), 1000)
    }

    //executa quando queremos desmonstar o componente
    componentWillUnmount () {
        clearInterval(this.timer)
    }
    //metodo render
    render () {
        return(
            <div>Timer: {this.state.time}</div>
        )
    }

}

export default Timer