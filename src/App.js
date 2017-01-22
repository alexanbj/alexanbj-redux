import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment() {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  decrement() {
    this.setState(prevState => ({
      counter: prevState.counter - 1,
    }));
  }

  render() {
    const { counter } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to @alexanbj's redux implementation</h2>
        </div>
        <p className="App-intro">
          Clicked: {counter} times
          {' '}
          <button onClick={() => this.increment()}>+</button>
          {' '}
          <button onClick={() => this.decrement()}>-</button>
        </p>
      </div>
    );
  }
}

export default App;
