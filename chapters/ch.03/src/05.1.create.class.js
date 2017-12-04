import React from 'react';
import createReactClass from 'create-react-class'

const ButtonUsingCreateReactClass = createReactClass({
  propTypes: {
    text: createReactClass.PropTypes.string,
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

export default ButtonUsingCreateReactClass;