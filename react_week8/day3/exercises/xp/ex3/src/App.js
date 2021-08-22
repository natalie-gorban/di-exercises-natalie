import React from 'react';


class ClickNow extends React.Component {
    constructor(props) {
    super(props)
    this.shootRegular = this.shootRegular.bind(this)
    }
  shootRegular() {
    alert('Hello!')
  }
  render() {
    return (
      <button onClick={this.shootRegular}>Keep Shooting!</button>
    )
  }
}


export default ClickNow;
