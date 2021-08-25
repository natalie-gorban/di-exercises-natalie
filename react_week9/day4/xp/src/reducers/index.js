const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log("reducer: incrementing", state)
      state = {
        count: state.count + action.payload
      }
      return state
    case "DECREMENT":
      console.log("reducer: decrementing", state)
      state = {
        count: state.count + action.payload
      }
      return state
    default:
      console.log("reducer: default action", state)
      state = {
        count: 0
      }
      return state;
  }
}

export { reducer }
