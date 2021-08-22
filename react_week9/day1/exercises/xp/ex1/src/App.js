import './App.css';
import React from 'react'

const InputWithLabel = (props) => {
  let {x, y} = props
  return (
    <>
      <label htmlFor={x}>{y}</label>
      <input id={x} name={x} type='text'/>
      <br/>
    </>
  )
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count : 0

    }
  }
  handler = event => {
    event.preventDefault()
    let inputs = event.target.getElementsByTagName('input')
    for (const item of inputs) {
      this.setState({[item.id]: item.value})
      console.log(`${item.id}: ${item.value}`)
    }
    this.setState({count: this.state.count+1})

  }

  render() {
    return (
      <div className='formA'>
        <form onSubmit={this.handler.bind(this)}>
          <h1>New Book</h1>
          <p>Data had been updated x{this.state.count} times</p>
          <InputWithLabel x='title' y='Title:' />
          <InputWithLabel x='author' y='Author:' />
          <InputWithLabel x='genre' y='Genre:' />
          <InputWithLabel x='year' y='Year Published:' />
          <button type='btn'>Submit: </button>
        </form>
      </div>

    )
  }

}


export default App;
