import React from 'react'


// --Exercise 3--
const myelement = <h1>I Love JSX!</h1>
const sum = <h1>{ 5+ 5 }</h1>
const result = <h1>React is { 5+ 5 } times better with JSX</h1>


// --Exercise 4--
const myelements = (
  <div>
    <h1>I am a Header</h1>
    <h1>I am a Header too</h1>
  </div>
);

const listItems = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
)

// --Exercise 5--
const inputTag = <input type="text" />

// --Exercise 6--
const myObject = {
  first_name: "Bob",
  last_name: "Dylan"
}

const renderedObject = (
  <div>
<p>My name is {myObject.first_name}</p>
<p>My last_name is {myObject.last_name}</p>
</div>
);



export default class App extends React.Component{
  render(){
    return([
      myelement,
      sum,
      result,
      myelements,
      listItems,
      inputTag,
      renderedObject
    ]);
  }
}
