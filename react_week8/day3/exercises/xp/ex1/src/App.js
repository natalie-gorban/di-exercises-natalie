import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favoriteColor: (this.props.hasOwnProperty('favoriteColor') ? this.props.favoriteColor : 'red'),
      originalColor: (this.props.hasOwnProperty('favoriteColor') ? this.props.favoriteColor : 'red')
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({favoriteColor: "yellow"})
    }, 5000)

  }

  setOriginalColor() {
    this.setState({favoriteColor: this.state.originalColor})
  }

  render() {
    return (
      <div>
        <h1 onMouseEnter={this.setOriginalColor.bind(this)}>My Favorite Color is {this.state.favoriteColor}, original color: {this.state.originalColor}</h1>
      </div>
    )
  }
}

export default App;
// const App = () => {
//   return (
//     <div>
//       <h1>My Favorite Color is red</h1>
//     </div>
//   )
// }

// export default App;