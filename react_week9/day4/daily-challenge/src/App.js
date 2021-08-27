import React, { useState } from 'react';
import CardsList from './components/CardsList';
import SearchBox from './components/SearchBox';
import {connect, useDispatch} from 'react-redux';
import {fetchRobots} from './redux/actions'
import './App.css';

const App = () => {
  const [status, setStatus] = useState('idle')
  const dispact = useDispatch()

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
export default connect(mapStateToProps)(App);
