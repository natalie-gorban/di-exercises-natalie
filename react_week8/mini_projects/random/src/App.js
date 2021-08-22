import React from 'react';
// import Data from './Data';
import quotesData from './quotesData';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quotesData: quotesData,
      index_quote: 0,
      colors: [
        'yellow',
        'brown',
        'green',
        'red',
        'blue',
        'pink'
      ],
      index_color: 0
    }
  }

  reroll() {
    let random_index_quote = 0
    let random_index_color = 0
    while (
      random_index_color === this.state.index_color ||
      random_index_quote === this.state.index_quote
    ) {
      random_index_quote = Math.floor(Math.random() * this.state.quotesData.length)
      random_index_color = Math.floor(Math.random() * this.state.colors.length)
    }
    this.setState({
      index_quote: random_index_quote,
      index_color: random_index_color
    })
  }

// quotesComponents = quotesData.map(data => <Data quotes={data.quotes} author={data.author} /> )
  render () {
    console.log(this.state)
    return (
      <div class='showMe' style={{backgroundColor: this.state.colors[this.state.index_color] }}>
        <h1>{this.state.quotesData[this.state.index_quote].quote}</h1>
        <h4>-{this.state.quotesData[this.state.index_quote].author}-</h4>
        <button onClick={this.reroll.bind(this)}>New quete</button>
      </div>
    )
  }
}
export default App;