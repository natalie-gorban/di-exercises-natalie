import React from 'react';

class ClickNow extends React.Component {
  constructor(props) {
    super(props)
    this.shootRegular = this.shootRegular.bind(this)
  }
  shootRegular(goal) {
    alert (goal)
  }
  render() {
    return (
      <button onClick={() => this.shootRegular("Goal!!!")}>Shooting!</button>
    )
  }
}


export default ClickNow;
