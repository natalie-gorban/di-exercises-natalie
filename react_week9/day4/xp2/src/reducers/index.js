const reducer = (state, action) => {
  switch (action.type) {
    case 'AGE_UP':
      console.log("reducer: incrementing", state)
      state = {
        age: state.age + action.payload
      }
      return state
    case 'AGE_DOWN':
      console.log("reducer: decrementing", state)
      state = {
        age: state.age + action.payload
      }
      return state
    default:
      console.log("reducer: default action", state)
      state = {
        age: 20
      }
      return state;
  }
}

export { reducer }
