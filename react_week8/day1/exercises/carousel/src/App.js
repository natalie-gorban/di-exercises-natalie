import React, {Component} from 'react';
import logo from './logo.svg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './App.css';


export default class App extends Component {
  render() {
      return (
          <Carousel>
              <div>
                  <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" />
                  <p className="legend">Hong Kong</p>
              </div>
              <div>
                  <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" />
                  <p className="legend">Macao</p>
              </div>
              <div>
                  <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" />
                  <p className="legend">Japan</p>
              </div>
              <div>
                  <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" style={{}}/>
                  <p className="legend">Las Vegas</p>
              </div>
          </Carousel>
      );
  }
};
