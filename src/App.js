import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import createStore from './createStore';
import reducer from './reducer';

const store = createStore(reducer);

class App extends Component {

  constructor(props) {
    super(props);
    this.unsubscribe = store.subscribe(this.storeChanged.bind(this));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  storeChanged() {
    this.forceUpdate();
  }

  increment() {
    store.dispatch({ type: 'INCREMENT' });
  }

  decrement() {
    store.dispatch({ type: 'DECREMENT' });
  }

  render() {
    const { counter } = store.getState();

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
