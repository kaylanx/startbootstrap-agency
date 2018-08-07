'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _characters = require('../json/characters.json');

var _characters2 = _interopRequireDefault(_characters);

var _single_character = require('./single_character');

var _single_character2 = _interopRequireDefault(_single_character);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = _react2.default.Component;

var AllCharacters = function (_Component) {
  _inherits(AllCharacters, _Component);

  function AllCharacters(props) {
    _classCallCheck(this, AllCharacters);

    var _this = _possibleConstructorReturn(this, (AllCharacters.__proto__ || Object.getPrototypeOf(AllCharacters)).call(this, props));

    _this.state = { characters: {} };
    return _this;
  }

  _createClass(AllCharacters, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ character: _characters2.default });
    }
  }, {
    key: 'render',
    value: function render() {
      var characterList = _characters2.default.map(function (character) {
        return _react2.default.createElement(_single_character2.default, { key: character.name, character: character });
      });
      return _react2.default.createElement(
        'div',
        { className: 'row text-center' },
        characterList
      );
    }
  }]);

  return AllCharacters;
}(Component);

exports.default = AllCharacters;