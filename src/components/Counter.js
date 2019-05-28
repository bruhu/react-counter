import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  increase = () => {
    console.log("Want tos inc");
  };

  decrease = () => {
    console.log("Want to decrease counter");
  };
  render() {
    return (
      <div>
        <h2>Counter and Toggle - Update</h2>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
        <div>{this.props.count}</div>
      </div>
    );
  }
}

// this takes the state we receive and returns a new count that will be local props coming from the state
// we create a propi n the fly using state.count
const mapStateToProps = state => {
  return {
    count: state.count
  };
};

// connect is a utility imported from react-redux
// accepts 2 params: function, and the second one is passing props to Counter component - this is a common way to take what we have in the store and assign it to a component
export default connect(mapStateToProps)(Counter);
