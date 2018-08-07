'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _characters = require('../json/characters.json');

var _characters2 = _interopRequireDefault(_characters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React = React,
    Component = _React.Component;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;

var CloseButton = function (_Component) {
  _inherits(CloseButton, _Component);

  function CloseButton(props) {
    _classCallCheck(this, CloseButton);

    return _possibleConstructorReturn(this, (CloseButton.__proto__ || Object.getPrototypeOf(CloseButton)).call(this, props));
  }

  _createClass(CloseButton, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'button',
        { className: 'btn btn-primary', 'data-dismiss': 'modal', type: 'button' },
        React.createElement('i', { className: 'fa fa-times' }),
        'Close'
      );
    }
  }]);

  return CloseButton;
}(Component);

render(React.createElement(CloseButton, null), document.getElementById('close-button'));