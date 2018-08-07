'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = _react2.default.Component;

var SingleCharacter = function (_Component) {
  _inherits(SingleCharacter, _Component);

  function SingleCharacter(props) {
    _classCallCheck(this, SingleCharacter);

    var _this = _possibleConstructorReturn(this, (SingleCharacter.__proto__ || Object.getPrototypeOf(SingleCharacter)).call(this, props));

    _this.state = { character: props.character };
    return _this;
  }

  _createClass(SingleCharacter, [{
    key: 'render',
    value: function render() {
      var character = this.state.character;


      if (typeof character.name === 'undefined') {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'col-md-4', key: character.name },
        _react2.default.createElement(
          'a',
          {
            className: 'portfolio-link',
            'data-toggle': 'modal',
            'data-character': character.name,
            href: '#characterModal'
          },
          _react2.default.createElement('img', {
            className: 'mx-auto rounded-circle',
            src: 'img/characters/' + character.name + '.jpg',
            alt: ''
          })
        ),
        _react2.default.createElement(
          'h4',
          null,
          character.displayName
        ),
        _react2.default.createElement(
          'p',
          { className: 'text-muted' },
          character.summary
        )
      );
    }
  }]);

  return SingleCharacter;
}(Component);

exports.default = SingleCharacter;