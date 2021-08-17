import logo from './logo.svg';
import React from 'react'
import './App.css';
import Button from 'react-bootstrap/Button';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      languages: {
        Php: 0,
        Python: 0,
        JavaScript: 0,
        Java: 0
      }
    }
  }
  vote(name){
    this.setState({
      languages: {
        ...this.state.languages,
        [name]: this.state.languages[name]+1
      }
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Vote Your Language</h1>
        {
          Object.keys(this.state.languages).map((key) => {
            return <Button variant="primary" onClick={() => this.vote(key)}>{this.state.languages[key]} - {key} - Click here</Button>
          })
        }
      </div>
    );
  }
}
