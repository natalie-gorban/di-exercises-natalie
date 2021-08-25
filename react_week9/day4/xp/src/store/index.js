import { createStore, applyMiddleware } from 'redux';
import { reducer } from '../reducers'
import thunk from 'redux-thunk';

const initialState = {count: 0}
export const store = createStore(reducer, initialState, applyMiddleware(thunk))
