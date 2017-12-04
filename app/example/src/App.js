import React, { Component } from 'react';
import './App.css';
import ButtonOne  from './ButtonOne'
import ButtonUsingCreateReactClassProps from './ButtonUsingCreateReactClassProps'
import ButtonUsingReactCreateClassState from './ButtonUsingReactCreateClassState'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ButtonUsingCreateReactClassProps />
        <ButtonUsingReactCreateClassState />
        <ButtonOne/>
      </div>
    );
  }
}

export default App;
