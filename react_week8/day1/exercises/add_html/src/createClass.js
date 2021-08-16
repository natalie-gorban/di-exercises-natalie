import React, { Component } from "react";


class myComponent extends Component {
    render() {
        return(
          <div style={{margin: "50px"}}>
            <h2>Html tags in React</h2>
            <a href="https://www.google.co.il/">This is a link</a>
            <form><input type="text" value="Enter yor name"/></form>
            <img src="https://source.unsplash.com/random/" style={{height: "500px"}}></img>
          </div>
        )
        }
    }

export default myComponent;
