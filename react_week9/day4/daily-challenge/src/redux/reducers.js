import {
  SELECT,
  ROBOTS,
  fetchRobots,
  handleLoaded,
  handleLoading
} from './actions';

let initState = {
  robots: [],
  searchText: '',
  status: 'idle'
}

export const reducer = (state=initState,action={}) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        status: 'loading'
      }
    case LOADED:
      return {
        ...state,
        status: 'idle'
      }
    case SELECT:
      return {...state, searchText:action.payload}
    case ROBOTS:
      return {...state, robots:action.payload}
    default:
      return {...state}
  }
}

export const fetchRobotsAsync = () => async dispatch => {
  dispatch(handleLoading())
  const response = await fetchRobots()
  dispatch(handleLoaded(response))
}
