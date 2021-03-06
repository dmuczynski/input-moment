'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactInputSlider = require('react-input-slider');

var _reactInputSlider2 = _interopRequireDefault(_reactInputSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.changeHours = function (pos) {
      var m = _this.props.moment;
      m.hours(pos.x);
      _this.props.onChange(m);
    };

    _this.changeMinutes = function (pos) {
      var m = _this.props.moment;
      m.minutes(pos.x);
      _this.props.onChange(m);
    };

    return _this;
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var isMilitary = this.props.isMilitary;


      var m = this.props.moment;

      var getFormattedTime = function getFormattedTime(hour) {
        return hour % 12 ? hour % 12 : 12;
      };

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('m-time', this.props.className) },
        _react2.default.createElement(
          'div',
          { className: 'showtime' },
          _react2.default.createElement(
            'span',
            { className: 'time' },
            isMilitary ? m.format('HH') : getFormattedTime(m.format('HH'))
          ),
          _react2.default.createElement(
            'span',
            { className: 'separater' },
            ':'
          ),
          _react2.default.createElement(
            'span',
            { className: 'time' },
            m.format('mm')
          ),
          !isMilitary && _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('span', { className: 'separater' }),
            _react2.default.createElement(
              'span',
              { className: 'time' },
              Math.floor(m.format('HH') / 12) ? 'PM' : 'AM'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'sliders' },
          _react2.default.createElement(
            'div',
            { className: 'time-text' },
            'Hours:'
          ),
          _react2.default.createElement(_reactInputSlider2.default, {
            className: 'u-slider-time',
            xmin: 0,
            xmax: 23,
            xstep: this.props.hourStep,
            x: m.hour(),
            onChange: this.changeHours
          }),
          _react2.default.createElement(
            'div',
            { className: 'time-text' },
            'Minutes:'
          ),
          _react2.default.createElement(_reactInputSlider2.default, {
            className: 'u-slider-time',
            xmin: 0,
            xmax: 59,
            xstep: this.props.minStep,
            x: m.minute(),
            onChange: this.changeMinutes
          })
        )
      );
    }
  }]);

  return _class;
}(_react.Component);

_class.defaultProps = {
  isMilitary: false
};
exports.default = _class;