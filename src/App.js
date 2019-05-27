import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true,
      count: 0,
    }
  }

  Reset = () => {
    this.setState(
      { count: 0 }
    )
  }

  IncrementItem = () => {
    //WRONG! ANTIPATTERN!
    //this.setState({count: this.state.count + 1})
    //CORRECT prevState func
    this.setState(prevState => {
      console.log("This is prev", prevState)
      return { count: prevState.count + 1 }
    })
  }

  DecreaseItem = () => {
    this.setState(
      prevState => {
        console.log("This is prev", prevState)
        return { count: prevState.count - 1 }
      }
    )
  }

  ToggleClick = () => {
    this.setState(
      prevState => {
        return { show: !prevState.show }
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <h2>Counter and Toggle - Update</h2>
          <button onClick={this.IncrementItem}>Click to increment by 1</button>
          <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
          <button onClick={this.ToggleClick}>
            {this.state.show ? 'Hide number' : 'Show number'}
          </button>
          <button onClick={this.Reset}>Reset</button>
          {this.state.show ? <h2>{this.state.count}</h2> : ''}
        </div>
      </div>
    );
  }
}

export default App;
