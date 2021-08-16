import React, {Component} from 'react'

export default class MyComponent extends Component {
  render() {
    return (
      <div style={{margin: "50px"}}>
        <h1>{this.props.header1}</h1>
        <h2>{this.props.header2}</h2>
      </div>
    )
  }
}