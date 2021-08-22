import './App.css';
import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeScreen = () => (
  <header>Home</header>
)

const ProfileScreen = () => (
  <header>Profile</header>
)

const ShopScreen = () => {
  // if (true) throw new Error('Shop Screen error')
  // else
  return(<div/>)
}

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to='/' component={HomeScreen}>Home</NavLink>
              </li>
              <li>
                <NavLink to='/profile' component={ProfileScreen}>Profile</NavLink>
              </li>
              <li>
                <NavLink to='/shop' component={ShopScreen}>Shop</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/'>
              <ErrorBoundary>
                <HomeScreen/>
              </ErrorBoundary>
            </Route>
            <Route path='/profile'>
              <ErrorBoundary>
                <ProfileScreen/>
              </ErrorBoundary>
            </Route>
            <Route path='/shop'>
              <ErrorBoundary>
                <ShopScreen/>
              </ErrorBoundary>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
