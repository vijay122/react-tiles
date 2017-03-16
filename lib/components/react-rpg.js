'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRpgPhoto = require('./react-rpg-photo');

var _reactRpgPhoto2 = _interopRequireDefault(_reactRpgPhoto);

var ReactRpg = function ReactRpg(_ref) {
  var imagesArray = _ref.imagesArray;
  var _ref$padding = _ref.padding;
  var padding = _ref$padding === undefined ? 0 : _ref$padding;
  var _ref$columns = _ref.columns;
  var columns = _ref$columns === undefined ? [1, 2, 3] : _ref$columns;

  var imageNodes = imagesArray.map(function (arr, index) {
    return _react2['default'].createElement(_reactRpgPhoto2['default'], { key: index, url: arr.url, text: arr.text, category: arr.category, columns: columns, padding: padding, clickHandler: arr.clickHandler });
  });

  var cssBreakpoints = '\n    .imageGridItem { width: ' + Math.floor(100 / columns[0]) + '%; }\n\n    @media only screen and (min-width : 480px) {\n      .imageGridItem { width: ' + Math.floor(100 / columns[1]) + '%; }\n    }\n    @media only screen and (min-width : 992px) {\n      .imageGridItem { width: ' + Math.floor(100 / columns[2]) + '%; }\n    }\n  ';

  return _react2['default'].createElement(
    'div',
    { className: 'imageGrid' },
    _react2['default'].createElement('style', { dangerouslySetInnerHTML: { __html: cssBreakpoints } }),
    imageNodes
  );
};

ReactRpg.propTypes = {
  imagesArray: _react2['default'].PropTypes.array.isRequired,
  columns: _react2['default'].PropTypes.array,
  padding: _react2['default'].PropTypes.number
};

ReactRpg.defaultProps = {
  imagesArray: [],
  columns: [1, 2, 3],
  padding: 0
};

exports['default'] = ReactRpg;
module.exports = exports['default'];