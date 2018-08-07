'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _all_characters = require('./all_characters');

var _all_characters2 = _interopRequireDefault(_all_characters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var render = _reactDom2.default.render;

/*eslint-env browser*/

render(_react2.default.createElement(_all_characters2.default, null), document.getElementById('all-characters'));