import React from 'react'

const animals =[{label: 'Horse1'}, {label: 'Turtle1'},{label: 'Elephant1'}, {label: 'Monkey1'}]
function AnimalsMap() {
  return(
    <div>
      <h1>Animals map</h1>
      <ul>
        {
          animals.map(item => (
            <li id={item.label}>{item.label}</li>
          ))
        }
      </ul>
    </div>
  )
}
export default AnimalsMap