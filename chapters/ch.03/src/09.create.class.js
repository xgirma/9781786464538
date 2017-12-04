import React from 'react'

const ButtonOne = React.createClass({
  handleClick() {
    console.log(this)
  },

  render() {
    return <button onClick={this.handleClick}/>
  }
})

export default ButtonOne;