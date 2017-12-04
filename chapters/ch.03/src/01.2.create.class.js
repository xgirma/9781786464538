'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = exports.Button = _react2.default.createClass({
  displayName: 'Button',
  render: function render() {
    return _react2.default.createElement('button', null);
  }
});

// before React 15.5.0
//
// const Button = React.createClass({
//   render() {
//     return <button />
//   }
// });