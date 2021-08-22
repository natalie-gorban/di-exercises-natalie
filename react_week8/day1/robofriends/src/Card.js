import React from 'react'

const Card = () => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
     {/* <h1>RoboFriends</h1> */}
      <img alt='robots' src='https://robohash.org/test?200x200' />
      <div>
      <h2>Jane Doe</h2>
      <p>jane.doe@gmail.com</p>
    </div>
  </div>
  );
}
export default Card;