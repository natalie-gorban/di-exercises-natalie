import { createStore } from 'redux'

const reducer = (state, action) => {
  let toBeAdded = isNaN(action.payload) ? 0 : action.payload
  let newState = { count: state.count + toBeAdded}
  console.log(`to be ${toBeAdded}. New state: ${JSON.stringify(newState)}`)
  return newState
}

const initialStore = {count: 0}
const store = createStore(reducer, initialStore)


export {reducer, store}
