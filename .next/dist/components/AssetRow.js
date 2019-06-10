"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _tracker = require("../ethereum/tracker");

var _tracker2 = _interopRequireDefault(_tracker);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/parastoo/Dropbox/Ethereum/SupplyChain/components/AssetRow.js";


var AssetRow = function (_Component) {
  (0, _inherits3.default)(AssetRow, _Component);

  function AssetRow() {
    (0, _classCallCheck3.default)(this, AssetRow);

    return (0, _possibleConstructorReturn3.default)(this, (AssetRow.__proto__ || (0, _getPrototypeOf2.default)(AssetRow)).apply(this, arguments));
  }

  (0, _createClass3.default)(AssetRow, [{
    key: "render",
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;

      return _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, this.props.asset.id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, this.props.asset.name), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, this.props.asset.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, this.props.asset.manufacturer), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, this.props.asset.price), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, this.props.asset.owner), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_routes.Link, { route: "/assets/history", __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        content: "History",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })))));
    }
  }]);

  return AssetRow;
}(_react.Component);

exports.default = AssetRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXNzZXRSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIndlYjMiLCJ0cmFja2VyIiwiTGluayIsIkFzc2V0Um93IiwiUm93IiwiQ2VsbCIsInByb3BzIiwiYXNzZXQiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIm1hbnVmYWN0dXJlciIsInByaWNlIiwib3duZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTzs7QUFDaEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFTLEFBQVk7Ozs7Ozs7SUFHZixBOzs7Ozs7Ozs7Ozs2QkFDSztVQUFBLEFBQ0MsTUFERCxBQUNlLHVCQURmLEFBQ0M7VUFERCxBQUNNLE9BRE4sQUFDZSx1QkFEZixBQUNNLEFBQ2I7OzZCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsY0FBTyxBQUFLLE1BQUwsQUFBVyxNQURwQixBQUNFLEFBQXdCLEFBQ3hCLHFCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGNBQU8sQUFBSyxNQUFMLEFBQVcsTUFGcEIsQUFFRSxBQUF3QixBQUN4Qix1QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxjQUFPLEFBQUssTUFBTCxBQUFXLE1BSHBCLEFBR0UsQUFBd0IsQUFDeEIsOEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsY0FBTyxBQUFLLE1BQUwsQUFBVyxNQUpwQixBQUlFLEFBQXdCLEFBQ3hCLCtCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGNBQU8sQUFBSyxNQUFMLEFBQVcsTUFMcEIsQUFLRSxBQUF3QixBQUN4Qix3QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxjQUFPLEFBQUssTUFBTCxBQUFXLE1BTnBCLEFBTUUsQUFBd0IsQUFDeEIsd0JBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0EsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFDVTs7b0JBRFY7c0JBWFIsQUFDRSxBQU9FLEFBQ0EsQUFDRSxBQUNFLEFBU1Q7QUFUUztBQUNFOzs7OztBQWZTLEEsQUEwQnZCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkFzc2V0Um93LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3BhcmFzdG9vL0Ryb3Bib3gvRXRoZXJldW0vU3VwcGx5Q2hhaW4ifQ==