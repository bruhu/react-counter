import React, { Component } from "react";

export default class Counter extends Component {
    increment = () => {
        console.log("Want tos inc")
    }

    decrement = () => {
        console.log("Want to decrease counter")
    }
  render() {
    return (
      <div>
        <h2>Counter and Toggle - Update</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <div>I'm a number</div>
      </div>
    );
  }
}
