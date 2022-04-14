import React, {Component} from 'react'
import './Counter.css'

interface State {
    value: number;
}

class ClassBasedCounter extends Component<any, State> {

    state: State = {
        value: 0
    };

    handleIncrement = () => {
        this.setState((state) => {
            return {value: state.value + 1}
        })
    }

    handleDecrement = () => {
        this.setState(
            (state) => {
                return (state.value > 0) ? {value: state.value - 1} : {value: 0}
            })
    }

    handleReset = () => {
        this.setState({value: 0})
    }

    render() {
        return (
            <div className="container">
                <h1>Counter Class Based</h1>
                <div className="value">{this.state.value}</div>
                <div className="operations">
                    <button onClick={this.handleIncrement} className="button">+</button>
                    <button onClick={this.handleDecrement} className="button">-</button>
                    <button onClick={this.handleReset} className="button">Reset</button>
                </div>
            </div>
        );
    }
}

export default ClassBasedCounter;