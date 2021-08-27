export const up = () => {
  console.log("actions.increment")
  return {
    type: 'AGE_UP',
    payload: 1
  }
}

export const down = () => {
  console.log("actions.decrement")
  return {
    type: 'AGE_DOWN',
    payload: -1
  }
}
