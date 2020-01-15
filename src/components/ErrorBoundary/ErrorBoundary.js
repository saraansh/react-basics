/*
 * The ErrorBoundary tool can be used to wrap instances which might have a chance to fail
 * And that cannot be made failsafe.
 */

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error });
  }

  render() {
    if (this.state.hasError) {
      return <h1> {this.state.errorMessage} </h1>;
    }
    return this.props.children;
  }
}
