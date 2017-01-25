'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ReactRpgPhoto = function ReactRpgPhoto(_ref) {
  var url = _ref.url;
  var text = _ref.text;
  var padding = _ref.padding;
  var _ref$clickHandler = _ref.clickHandler;
  var clickHandler = _ref$clickHandler === undefined ? null : _ref$clickHandler;

  var pointer = clickHandler ? 'pointer' : 'auto';

  var bgColors = { "Default": "#81b71a",
    "Blue": "#00B1E1",
    "Cyan": "#37BC9B",
    "Green": "#8CC152",
    "Red": "#E9573F",
    "Yellow": "#F6BB42"
  };

  var styles = {
    imageGridItem: {
      display: 'inline-block',
      boxSizing: 'border-box',
      float: 'left',
      padding: padding
    },
    imageWrapper: {
      position: 'relative',
      width: '100%',
      paddingBottom: '100%',
      backgroundImage: 'url(' + url + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      cursor: pointer
    },
    hoverText: {
      backgroundColor: 'black',
      color: 'white'
    }
  };

  return _react2['default'].createElement(
    'div',
    { className: 'imageGridItem', style: styles.imageGridItem },
    _react2['default'].createElement(
      'a',
      { onClick: clickHandler ? clickHandler.bind(undefined, url) : null },
      _react2['default'].createElement(
        'div',
        { className: 'imageWrapper', style: styles.imageWrapper },
        _react2['default'].createElement(
          'p',
          null,
          _react2['default'].createElement(
            'label',
            { style: styles.hoverText },
            text
          )
        )
      )
    )
  );
};

ReactRpgPhoto.propTypes = {
  url: _react2['default'].PropTypes.string.isRequired,
  padding: _react2['default'].PropTypes.number,
  clickHandler: _react2['default'].PropTypes.func,
  text: _react2['default'].PropTypes.string
};

exports['default'] = ReactRpgPhoto;
module.exports = exports['default'];