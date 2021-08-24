import logo from '../logo.svg';
import React from 'react'
import {INCREASE_COUNT, DECREASE_COUNT} from '../actions'
import {store} from '../reducers'

export default class Counter extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Count: {store.getState().count}
          </p>
          <input type='button' value="+" onClick={() => store.dispatch(INCREASE_COUNT())}/>
          <input type='button' value="-" onClick={() => store.dispatch(DECREASE_COUNT())}/>
        </header>
      </div>
    )
  }
}
