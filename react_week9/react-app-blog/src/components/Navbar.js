import React from 'react'
import { NavLink } from "react-router-dom";
import style from '../style.css'

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <a href='/' className='brand-logo center-center-'>My Blog</a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            {/* <li><NavLink to='/'>Home</NavLink></li> */}
            <li><NavLink activeStyle={{backgroundColor:"#353d46"}} className={style.link} to='/'>Home</NavLink></li>

            <li><NavLink to='About'>About</NavLink></li>
            <li><NavLink to="Contacts">Contacts</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;

// const routing = (
//   <Router>
//     <div>
//       <h1>Exemple</h1>
//       <ul>
//         <li><NavLink to='/About' exactiveStyle={{color: 'yellow'}}>About</NavLink></li>
//       </ul>
//       <Route exact path='/About' component={About} />
//     </div>
//   </Router>
// )

// ReactDOM.render(routing, document.getElementById('root'));
