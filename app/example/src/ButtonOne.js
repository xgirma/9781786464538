import React from 'react'
import createReactClass from 'create-react-class'

const ButtonOne = createReactClass({
  handleClick() {
    console.log(this)
  },

  render() {
    return <button onClick={this.handleClick}/>
  }
})

export default ButtonOne;
