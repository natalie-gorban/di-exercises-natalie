import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { increment, decrement, incrementOdd, incrementAsync } from '../actions'

const Counter = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit', event)
    const button = event.target.dataset.button
    const count = event.target.parentElement.firstElementChild.dataset.count

    switch(button) {
      case "increment":
        store.dispatch(increment())
        break
      case "decrement":
        store.dispatch(decrement())
        break
      case "incrementAsync":
        store.dispatch(incrementAsync())
        break
      case "incrementOdd":
        store.dispatch(incrementOdd(count))
        break
      default:
        console.log("Unknown button")
    }
  }

  return (
    <>
      <p data-count={props.count}>Clicked: {props.count} times</p>
      <input type="button" onClick={handleSubmit} value="+" data-button="increment"/>
      <input type="button" onClick={handleSubmit} value="-" data-button="decrement"/>
      <input type="button" onClick={handleSubmit} value="Increment if odd" data-button="incrementOdd"/>
      <input type="button" onClick={handleSubmit} value="Increment async" data-button="incrementAsync"/>
    </>
  )
}

const mapStateToProps = (state) => {
  return { count: state.count }
}

export default connect(mapStateToProps)(Counter)
