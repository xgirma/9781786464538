import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Button = React.createClass({
  render () {
    return <button/>
  }
});

describe('test', () => {
  it('should be a button', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Button/>);

    const actual = renderer.getRenderOutput().type;
    const expected = 'a';
    expect(actual).toEqual(expected)

  });
});



console.log(component);