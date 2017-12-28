import jsdom from 'jsdom'
var doc = jsdom('<!doctype html><html><body></body></html>')
var win = doc.defaultView

global.document = doc
global.window = win

import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';

describe('test', () => {
  it('should be a button', () => {
    const Button = () => <button/>
    const component = ReactTestUtils.renderIntoDocument(<div><Button/></div>)

    const expected = 'a';
    expect(component).toEqual(expected)

  });
});