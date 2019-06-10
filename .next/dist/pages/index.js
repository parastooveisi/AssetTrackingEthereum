"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _tracker = require("../ethereum/tracker");

var _tracker2 = _interopRequireDefault(_tracker);

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require("../routes");

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _AssetRow = require("../components/AssetRow");

var _AssetRow2 = _interopRequireDefault(_AssetRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/parastoo/Dropbox/Ethereum/SupplyChain/pages/index.js?entry";


var AssetTracker = function (_Component) {
  (0, _inherits3.default)(AssetTracker, _Component);

  function AssetTracker() {
    (0, _classCallCheck3.default)(this, AssetTracker);

    return (0, _possibleConstructorReturn3.default)(this, (AssetTracker.__proto__ || (0, _getPrototypeOf2.default)(AssetTracker)).apply(this, arguments));
  }

  (0, _createClass3.default)(AssetTracker, [{
    key: "renderbuyers",
    value: function renderbuyers() {
      var items = this.props.buyers.map(function (address) {
        return {
          header: address,
          description: "",
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      });
    }
  }, {
    key: "renderproducers",
    value: function renderproducers() {
      var items = this.props.producers.map(function (address) {
        return {
          header: address,
          description: "",
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      });
    }
  }, {
    key: "renderRows",
    value: function renderRows() {
      return this.props.assets.map(function (asset, index) {
        return _react2.default.createElement(_AssetRow2.default, {
          key: index,
          id: index,
          asset: asset
          //address={this.props.owner}
          , __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, " List of all producers! "), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, this.renderproducers()), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, " List of all Purchesers! "), _react2.default.createElement(_routes.Link, { route: "assets/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: "right",
        content: "Create an asset",
        icon: "add circle",
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }))), this.renderbuyers()), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, " Asset details! "), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "ID"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "Name"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, "Description"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "Manufacturer"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, "Price"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, "Address of Owner"))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, this.renderRows())));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var buyers, producers, assetCount, blockNumber, assets;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _tracker2.default.methods.getbuyers().call();

              case 2:
                buyers = _context.sent;
                _context.next = 5;
                return _tracker2.default.methods.getproducers().call();

              case 5:
                producers = _context.sent;
                _context.next = 8;
                return _tracker2.default.methods.assetsCount().call();

              case 8:
                assetCount = _context.sent;
                _context.next = 11;
                return _web2.default.eth.getBlockNumber();

              case 11:
                blockNumber = _context.sent;

                console.log('jjjjjjjjjjjj', blockNumber);
                // const info = await web3.eth.getBlock(blockNumber);
                // console.log(info);


                _context.next = 15;
                return _promise2.default.all(Array(parseInt(assetCount)).fill().map(function (element, index) {
                  return _tracker2.default.methods.assets(index).call();
                }));

              case 15:
                assets = _context.sent;
                return _context.abrupt("return", {
                  buyers: buyers,
                  producers: producers,
                  assets: assets,
                  assetCount: assetCount
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return AssetTracker;
}(_react.Component);

exports.default = AssetTracker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsIlRhYmxlIiwidHJhY2tlciIsIkxheW91dCIsIkxpbmsiLCJ3ZWIzIiwiQXNzZXRSb3ciLCJBc3NldFRyYWNrZXIiLCJpdGVtcyIsInByb3BzIiwiYnV5ZXJzIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJwcm9kdWNlcnMiLCJhc3NldHMiLCJhc3NldCIsImluZGV4IiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJyZW5kZXJwcm9kdWNlcnMiLCJyZW5kZXJidXllcnMiLCJyZW5kZXJSb3dzIiwibWV0aG9kcyIsImdldGJ1eWVycyIsImNhbGwiLCJnZXRwcm9kdWNlcnMiLCJhc3NldHNDb3VudCIsImFzc2V0Q291bnQiLCJldGgiLCJnZXRCbG9ja051bWJlciIsImJsb2NrTnVtYmVyIiwiY29uc29sZSIsImxvZyIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVE7O0FBQ3ZCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7Ozs7Ozs7SUFFZixBOzs7Ozs7Ozs7OzttQ0EyQlcsQUFDYjtVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixJQUFJLG1CQUFXLEFBQzdDOztrQkFBTyxBQUNHLEFBQ1I7dUJBRkssQUFFUSxBQUNiO2lCQUhGLEFBQU8sQUFHRSxBQUVWO0FBTFEsQUFDTDtBQUZKLEFBQWMsQUFRZCxPQVJjOzsyQ0FRUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFB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QkFBakQ7QTs7dUJBQ21CLGtCQUFBLEFBQVEsUUFBUixBQUFnQixjLEFBQWhCLEFBQThCOzttQkFBakQ7QTs7dUJBRW9CLGNBQUEsQUFBSyxJQUFMLEEsQUFBUzs7bUJBQTdCO0EsdUNBQ047O3dCQUFBLEFBQVEsSUFBUixBQUFZLGdCQUFaLEFBQTRCLEFBQzVCO0FBQ0E7Ozs7O3lDQUdtQixBQUFRLFVBQ25CLFNBQU4sQUFBTSxBQUFTLGFBQWYsQUFDRyxPQURILEFBRUcsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDdkI7eUJBQU8sa0JBQUEsQUFBUSxRQUFSLEFBQWdCLE9BQWhCLEFBQXVCLE9BQTlCLEFBQU8sQUFBOEIsQUFDdEM7QUFMYyxBQUNqQixBLGlCQUFBLENBRGlCOzttQkFBZjtBOzswQkFPRyxBQUVMOzZCQUZLLEFBR0w7MEJBSEssQUFJTDs4QkFKSyxBO0FBQUEsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXBCcUIsQSxBQTZHM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcGFyYXN0b28vRHJvcGJveC9FdGhlcmV1bS9TdXBwbHlDaGFpbiJ9