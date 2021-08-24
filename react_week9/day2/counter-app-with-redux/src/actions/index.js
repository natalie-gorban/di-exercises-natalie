const increaseCount = () => {
  return {
    type: "INCREASE_COUNT",
    payload: 1
  }
}

const decreaseCount = () => {
  return {
    type: "DECREASE_COUNT",
    payload: -1
  }
}

export {increaseCount, decreaseCount}
