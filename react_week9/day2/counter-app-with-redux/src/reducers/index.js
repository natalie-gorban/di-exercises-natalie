import { createStore } from 'redux'

const reducer = (state) => {
  return state
}

const initialStore = {count: 0}
const store = createStore(reducer, initialStore)


export {reducer, store}
