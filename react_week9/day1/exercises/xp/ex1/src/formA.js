import React from 'react'

class FormA extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     count : 0

  //   }
  // }
  handler = () => {

  }
  render() {
    return (
      <div>
      <h1>New Book</h1>
      <input type='text'>Title</input>
      <input type='text'>Author</input>
      <input type='text'>Genre</input>
      <input type='text'>Year Published</input>
      <button type='btn'>Submit</button>
      </div>

    );
  }
}

export default FormA;
