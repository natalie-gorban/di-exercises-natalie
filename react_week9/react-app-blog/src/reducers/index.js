export const reducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_POST':
      console.log("reducer: remove post", state)
      state = state.filter((v, i) => i != action.payload)
      return state
    default:
      console.log("reducer: default action", state)
      return state;
  }
}
