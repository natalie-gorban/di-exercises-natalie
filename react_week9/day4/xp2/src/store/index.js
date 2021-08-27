import { createStore, applyMiddleware } from 'redux';
import { reducer } from '../reducers'
import thunk from 'redux-thunk';

const logAction = (storeAPI) => (next) => (action) => {
  console.log('dipatching', action)
  const state = storeAPI.getState()
  let result = next(action)
  console.log(`caught in the middleware:`,state)
  return result
}

const initialState = {age: 20}
export const store = createStore(reducer, initialState, applyMiddleware(thunk, logAction))
