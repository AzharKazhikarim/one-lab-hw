import React, { ChangeEvent, Component } from "react";
import "./Counter.css";

interface State {
  value: number;
}

class ClassBasedCounter extends Component {
  state: State = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    this.setState(
      this.state.value > 0 ? { value: this.state.value - 1 } : { value: 0 }
    );
  };

  handleReset = () => {
    this.setState({ value: 0 });
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: +e.target.value });
  };

  render() {
    return (
      <div className="container">
        <h1>Counter Class Based</h1>
        <div className="value">{this.state.value}</div>
        <input
          type="number"
          placeholder="Type number..."
          onChange={this.handleChange}
        />
        <div className="operations">
          <button onClick={this.handleIncrement} className="button">
            +
          </button>
          <button onClick={this.handleDecrement} className="button">
            -
          </button>
          <button onClick={this.handleReset} className="button">
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default ClassBasedCounter;

// use prettier:
// it removes all extra spaces, adds ';'
// in this case interface is not necessary
// do not write input value if you use placholder, if val exists placeholder will never be showen
