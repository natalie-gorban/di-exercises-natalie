import logo from './logo.svg';
import React from 'react';
import './App.css';
import {store} from './reducers'
import {decreaseCount, increaseCount} from './actions'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Count: {store.getState().count}
          </p>
          <input type='button' value="increase" onClick={() => store.dispatch(increaseCount())}/>
          <input type='button' value="decrease" onClick={() => store.dispatch(decreaseCount())}/>
        </header>
      </div>
    )
  }
}

export default App;
