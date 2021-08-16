import React from 'react'

// --Exercise 7.1-3--
const animals = ['Horse', 'Turtle', 'Elephant', 'Monkey'];

function AnimalList() {
  return (
    <div>
      <h1>Animals list</h1>
      <ul>
        {
          animals.map(item => (
            <li>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}
export default AnimalList