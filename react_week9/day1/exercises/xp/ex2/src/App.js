import './App.css';
import React from 'react'

const regex = {
  'first': {
    regex: /^[a-z\s]+$/i,
    errorMessage: 'First name should contain only letters and spaces. '
  },
  'last': {
    regex: /^[a-z\s]+$/i,
    errorMessage: 'Last name should contain only letters and spaces. '
  },
  'phone': {
    regex: /^\d+$/,
    errorMessage: 'Phone number should contain only digits. '
  },
  'email': {
    regex: /^[a-z\s\d.]+@[a-z\d\s.]+\.[a-z]+$/i,
    errorMessage: 'Email has wrong pattern. '
  },
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      welcomeMessage : 'Please provide your information below',
      message: 'Please provide your information below',
      submitted : false
    }
  }

  submitHandler = event => {
    event.preventDefault()
    let inputs = event.target.getElementsByTagName('input')
    let formInputes = {}
    let errorMessages = ""
    for (const item of inputs) {
      formInputes[item.id] = item.value
      const found = item.value.match(regex[item.id]['regex'])
      if (! found ) {
        errorMessages += regex[item.id]['errorMessage']
      }
    }
    if (errorMessages !== '') {
      this.setState({message: errorMessages})
    } else {
      this.setState(formInputes)
      this.setState({submitted: true})
    }

  }

  resetHandler = event => {
    event.preventDefault()
    this.setState({submitted: false})
    this.setState({message: this.state.welcomeMessage})

  }

  render() {
    return (
      <div className='formB'>
        {
          this.state.submitted === false ? (
            <form onSubmit={this.submitHandler.bind(this)}>
              <h1>Welcome</h1>
              <p>{ this.state.message }</p>
              <input id='first' type='text' placeholder='First Name'/>
              <input id='last' type='text' placeholder='Last Name'/>
              <input id='phone' type='text' placeholder='Phone Number'/>
              <input id='email' type='text' placeholder='Email Address'/>
              <br/>
              <button type='btn'>Submit</button>
            </form>
          ) : (
            <form onSubmit={this.resetHandler.bind(this)}>
              <p>{ `${this.state.last}, ${this.state.first}` }</p>
              <p>{this.state.phone} | {this.state.email}</p>
              <button type='btn'>Reset</button>
            </form>
          )

        }
      </div>

    )
  }

}


export default App;
