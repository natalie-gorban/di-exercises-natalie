import './App.css';
import React from 'react';
import PrintHelloC from './PrintHelloC';
import PrintHelloF from './PrintHelloF';
import PrintHello from './PrintHello';

class App extends React.Component {
  render(){
    return (
      <div>
        <PrintHelloF/>
        <PrintHelloC/>
        <PrintHello message="I Love React"/>
        <PrintHello message="I'm a React Component"/>
      </div>

    );
  }
}
export default App;
