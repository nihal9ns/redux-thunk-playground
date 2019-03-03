import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Test from './Test';
import Counter from './Counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Redux Thunk Playground</h1>
          <Test /> 
          <br />
          <hr />
          <br />
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;