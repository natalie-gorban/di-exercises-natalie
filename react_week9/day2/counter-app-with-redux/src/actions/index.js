const INCREASE_COUNT = () => {
  return {
    type: "INCREASE_COUNT",
    payload: 1
  }
}

const DECREASE_COUNT = () => {
  return {
    type: "DECREASE_COUNT",
    payload: -1
  }
}

export {INCREASE_COUNT, DECREASE_COUNT}
