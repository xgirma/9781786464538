import React from 'react';

const Button = React.createClass ({
  getInitialState() {
    return {
      text: 'Click me!',
    }
  },

  render() {
    return <button>{this.state.text}</button>
  }
})