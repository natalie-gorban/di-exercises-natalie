import React from 'react';

class ClickNow extends React.Component {
  constructor(props) {
    super(props)
    this.shootRegular = this.shootRegular.bind(this)
  }
  shootTwo({Goal}) {
    alert (Goal)
  }
  render() {
    return (
      <button onClick={() => this.shootRegular("Goal!!!")}>Shooting!</button>
    )
  }
}


export default ClickNow;
