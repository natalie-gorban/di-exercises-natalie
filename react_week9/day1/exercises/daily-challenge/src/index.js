import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// A - We import the Provider from react-redux
import { Provider } from 'react-redux'

// B- We import the store variable.
import { store } from './store'

// C - We wrap the App component with the Provider
ReactDOM.render(
  //pass the store to the Provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
