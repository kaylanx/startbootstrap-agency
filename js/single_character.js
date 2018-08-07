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

var SingleCharacter = function (_Component) {
  _inherits(SingleCharacter, _Component);

  function SingleCharacter(props) {
    _classCallCheck(this, SingleCharacter);

    var _this = _possibleConstructorReturn(this, (SingleCharacter.__proto__ || Object.getPrototypeOf(SingleCharacter)).call(this, props));

    _this.state = { character: {} };
    return _this;
  }

  _createClass(SingleCharacter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var character = _characters2.default.filter(function (character) {
        return character.name === 'bouncy';
      })[0];

      this.setState({ character: character });
    }
  }, {
    key: 'render',
    value: function render() {
      var character = this.state.character;


      if (typeof character.name === 'undefined') {
        return null;
      }

      return React.createElement(
        'div',
        { 'class': 'col-md-4' },
        React.createElement(
          'a',
          { 'class': 'portfolio-link', 'data-toggle': 'modal', 'data-character': character.name, href: '#characterModal' },
          React.createElement('img', { 'class': 'mx-auto rounded-circle', src: "img/characters/" + character.name + ".jpg", alt: '' })
        ),
        React.createElement(
          'h4',
          null,
          character.displayName
        ),
        React.createElement(
          'p',
          { 'class': 'text-muted' },
          character.about
        )
      );
    }
  }]);

  return SingleCharacter;
}(Component);

render(React.createElement(SingleCharacter, null), document.getElementById('single-character'));