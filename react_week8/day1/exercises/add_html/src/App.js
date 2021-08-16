// import logo from './logo.svg';
// import './App.css';

import React, { Component } from "react";
import MyComponent from './MyComponent'

export default class App extends Component {
  render() {
    return (
      <MyComponent header1={this.props.h1} header2={this.props.h2}/>
    )
  }
}
// import myComponent from './createClass';

// class newComponent extends Component{
//   render(){
//     return (
//       <div>
//         <myComponent/>
//       </div>
//     )

//   }
// }

// export default myComponent;
