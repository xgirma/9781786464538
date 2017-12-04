import React from 'react';
import createReactClass from 'create-react-class'

const ButtonUsingReactCreateClassState = createReactClass ({
  getInitialState() {
    return {
      text: 'Click me! props',
    }
  },

  render() {
    return <button>{this.state.text}</button>
  }
})

export default ButtonUsingReactCreateClassState;