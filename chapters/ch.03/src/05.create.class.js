import React from 'react';

const Button = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      text: 'Click me!',
    }
  },

  render() {
    return <button>{this.props.text}</button>
  }
})