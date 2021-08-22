import React from 'react';
import CardsList from './components/CardsList';
import SearchBox from './components/SearchBox';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchText: '',
      inputText: ''
    }
    // this.inputText = ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      this.setState({robots:data})
    })
    .catch(e => {
      console.log(e);
    })
  }

  handleChange = (e) => {
    const {searchText} = this.state;
    // this.setState({searchText:e.target.value})
    this.state.inputText = e.target.value;
  }

  handleClick = () => {
    // console.log('handleClick');
    this.setState({searchText:this.state.inputText})
  }

  render() {
    const {robots,searchText} = this.state;
    console.log(searchText);

    const filterRobots = robots.filter(item => {
      return item.name.toLowerCase().includes(searchText.toLowerCase())
    })

    return (
      <div className="tc">
        <SearchBox onInputChange={this.handleChange} onButtonClick={this.handleClick}/>
        <CardsList robots = {filterRobots} />
      </div>
    );
  }
}

export default App;
