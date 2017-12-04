import React from 'react';
import createReactClass from 'create-react-class'
import PropTypes from 'prop-types'

const ButtonUsingCreateReactClass = createReactClass({
  propTypes: {
    text: PropTypes.string,
  },

  getDefaultProps() {
    return {
      text: 'Click me! props',
    }
  },

  render() {
    return <button>{this.props.text}</button>
  }
})

export default ButtonUsingCreateReactClass