import React from 'react';

class Button extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      text: 'Click me!'
    }
  }

  render() {
    return <button>{this.state.text}</button>
  }
}