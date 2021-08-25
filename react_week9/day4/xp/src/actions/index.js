const increment = () => {
  console.log("actions.increment")
  return {
    type: "INCREMENT",
    payload: 1
  }
}

const decrement = () => {
  console.log("actions.decrement")
  return {
    type: "INCREMENT",
    payload: -1
  }
}

const incrementAsync = () => {
  return dispatch => {
    setTimeout(() => {
      console.log("actions.incrementAsync with timeout")
      dispatch(increment())
    }, 1000)
  }
}

const incrementOdd = (count) => {
  return dispatch => {
    if (count % 2 === 0) {
      console.log("actions.incrementOdd count is even", count)
    } else {
      console.log("actions.incrementOdd count is odd", count)
      dispatch(increment())
    }
  }
}

export {
  increment,
  decrement,
  incrementAsync,
  incrementOdd
}
