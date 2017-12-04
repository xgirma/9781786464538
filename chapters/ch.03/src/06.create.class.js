import React from 'react';
import { PropTypes } from 'prop-types'

class Button extends React.Component{
  render(){
    return <button>{this.props.text}</button>
  }
}

Button.propTypes = {
  text: React.PropTypes.string,
}

Button.defaultProps = {
  text: 'Click me!',
}