const reducer = (state, action) => {

  switch (action.type) {
    case 'REMOVE_POST':
      console.log("reducer: remove post", state)
      state.posts = state.posts.filter((v, i) => v.id !== action.payload)
      console.log("reducer: after removal post", state)
      return state
    default:
      console.log("reducer: default action", state)
      return state;
  }
}

export { reducer }
