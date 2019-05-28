import React, { Component } from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers";
// ^ this is after running npm i redux react-redux

import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";

// REMEMBER TO ATTACH THE DEVTOOL
const store = createStore(reducer);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      count: 0
    };
  }

  // Reset = () => {
  //   this.setState({ count: 0 });
  // };

  // updateCounter = type => {
  //   switch (type) {
  //     case "INCREMENT":
  //       console.log("Going to increment");
  //       return this.setState(state => {
  //         return {
  //           count: state.count + 1
  //         };
  //       });
  //     case "DECREMENT":
  //       console.log("Going to decrement");
  //       return this.setState(state => {
  //         return {
  //           count: state.count - 1
  //         };
  //       });
  //     default:
  //       return this.state;
  //   }
  // };

  //This was there before updateCounter:
  // IncrementItem = () => {
  //   //WRONG! ANTIPATTERN!
  //   //this.setState({count: this.state.count + 1})
  //   //CORRECT prevState func
  //   this.setState(prevState => {
  //     console.log("This is prev", prevState);
  //     return { count: prevState.count + 1 };
  //   });
  // };

  // DecreaseItem = () => {
  //   this.setState(prevState => {
  //     console.log("This is prev", prevState);
  //     return { count: prevState.count - 1 };
  //   });
  // };

  ToggleClick = () => {
    this.setState(prevState => {
      return { show: !prevState.show };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Provider store={store}>
            <Counter />
          </Provider>
          {/* <h2>Counter and Toggle - Update</h2>
          <button onClick={() => this.updateCounter("INCREMENT")}>
            Click to increment by 1
          </button>
          <button onClick={() => this.updateCounter("DECREMENT")}>
            Click to decrease by 1
          </button>
          <button onClick={this.ToggleClick}>
            {this.state.show ? "Hide number" : "S'how number"}
          </button>
          <button onClick={this.Reset}>Reset</button>
          {this.state.show ? <h2>{this.state.count}</h2> : ""} */}
        </div>
      </div>
    );
  }
}

export default App;
