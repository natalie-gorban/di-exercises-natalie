import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Contacts/>
      <About/>
    </div>
  );
}

export default App;
