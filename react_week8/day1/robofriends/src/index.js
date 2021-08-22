import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card'
import reportWebVitals from './reportWebVitals'


ReactDOM.render(
  <React.StrictMode>
    <div>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
