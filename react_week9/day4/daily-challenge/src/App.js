import React, { useState } from 'react';
import CardsList from './components/CardsList';
import SearchBox from './components/SearchBox';
import {connect, useDispatch} from 'react-redux';
import {fetchRobots} from './redux/actions'
import './App.css';

const App = () => {
  const [status, setStatus] = useState('idle')
  const dispatch = useDispatch()

  componentDidMount() {
    this.props.dispatch(fetchRobots())
  }

  render() {
    // const {robots} = this.state;
    const {searchText,robots} = this.props;

    const filterRobots = robots.filter(item => {
      return item.name.toLowerCase().includes(searchText.toLowerCase())
    })

    return (
      <div className="tc">
        <SearchBox />
        <CardsList robots = {filterRobots} disabled={isLoading}/>
        {loader}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    searchText: state.searchText,
    robots: state.robots
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleSelect: (val) => dispatch({
      type: SELECT,
      payload: val
    }),
    handleLoading: () => dispatch({
      type: LOADING,
      status: 'loading'
    }),
    handleLoaded: () => dispatch({
      type: LOADED,
      status: 'idle'
    }),
    fetchRobots: () => (dispatch) => {
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

  }
}
export default connect(mapStateToProps)(App);
