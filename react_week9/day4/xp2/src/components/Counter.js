import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { up, down } from '../actions'

const Counter = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit', event)
    const button = event.target.dataset.button
    const age = event.target.parentElement.firstElementChild.dataset.age

    switch(button) {
      case 'AGE_UP':
        store.dispatch(up())
        break
      case 'AGE_DOWN':
        store.dispatch(down())
        break
      default:
        console.log("Unknown button")
    }
  }

  return (
    <>
      <p data-age={props.age}>your age: <span>{props.age}</span></p>
      <input type="button" onClick={handleSubmit} value="Age up" data-button='AGE_UP'/>
      <input type="button" onClick={handleSubmit} value="Age down" data-button='AGE_DOWN'/>
    </>
  )
}

const mapStateToProps = (state) => {
  return { age: state.age }
}

const mapDispatchToProps = (dispatch) => {
  return {
    up: () => dispatch({type: 'AGE_UP'}),
    down: () => dispatch({type: 'AGE_DOWN'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
