import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts'
import Post from './components/Post'
import {BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Route exact path='/' component={Home}/>
          <Route path='/contacts' component={Contacts}/>
          <Route path='/about' component={About}/>
          <Route path='/article:post_id' component={Post}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
