export const SELECT = 'SELECT';
export const ROBOTS = 'ROBOTS';
export const LOADING = 'LOADING';
export const LOADED = 'LOADED'

export const handleSelect = (val) =>{
  return {
    type: SELECT,
    payload: val
  }
}

export const handleLoading = () => {
  return {
    type: LOADING,
    payload: null,
    status: 'loading'
  }
}

export const handleLoaded = (val) => {
  return {
    type: LOADED,
    payload: val,
    status: 'idle'
  }
}

export const fetchRobots = () => async (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // this.setState({robots:data})
      // this.props.dispatch(fetchRobots(data))
      // this.props.getRobots(data);
      dispatch({type:ROBOTS, payload:data})
    })
    .catch(e => {
      console.log(e);
    })
}
