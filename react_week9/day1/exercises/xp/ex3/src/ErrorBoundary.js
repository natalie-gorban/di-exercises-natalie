import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hasError: false,
      error: "",
      errorInfo: ""
    }
  }

  static getDerivedStateFromError(error) {
    return {hasError: true}
  }

  componentDidCatch (error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render () {
    if (this.state.hasError) {
      return <h1>An error has occured: {this.state.errorInfo}</h1>
    } else {
      return this.props.children
    }
  }
}
