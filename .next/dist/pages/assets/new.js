"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _tracker = require("../../ethereum/tracker");

var _tracker2 = _interopRequireDefault(_tracker);

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require("../../routes");

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/parastoo/Dropbox/Ethereum/SupplyChain/pages/assets/new.js?entry";


var AssetNew = function (_Component) {
  (0, _inherits3.default)(AssetNew, _Component);

  function AssetNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AssetNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AssetNew.__proto__ || (0, _getPrototypeOf2.default)(AssetNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: "",
      description: "",
      manufacturer: "",
      price: "",
      id: "",
      loading: false,
      errorMessage: ""
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var _this$state, name, description, manufacturer, price, id, accounts, d;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this$state = _this.state, name = _this$state.name, description = _this$state.description, manufacturer = _this$state.manufacturer, price = _this$state.price, id = _this$state.id;

                console.log(id);
                _this.setState({ loading: true, errorMessage: "" });

                _context.prev = 4;
                _context.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;

                console.log(accounts[0]);
                _context.next = 11;
                return _tracker2.default.methods.createAsset(name, description, manufacturer, price, id).send({ from: accounts[0], gas: "1000000" });

              case 11:
                d = new Date().toLocaleTimeString(); // for now

                console.log(d);
                d.getHours(); // => 9
                d.getMinutes(); // =>  30
                d.getSeconds();
                _routes.Router.pushRoute("/");
                _context.next = 22;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](4);

                _this.setState({ errorMessage: _context.t0.message });

              case 22:
                _this.setState({ loading: false });

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 19]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AssetNew, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, " Create an Asset "), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Name"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.name,
        onChange: function onChange(event) {
          return _this3.setState({ name: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Description"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.description,
        onChange: function onChange(event) {
          return _this3.setState({ description: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Manufacturer"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.manufacturer,
        onChange: function onChange(event) {
          return _this3.setState({ manufacturer: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Price"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.price,
        onChange: function onChange(event) {
          return _this3.setState({ price: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "ID"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.id,
        onChange: function onChange(event) {
          return _this3.setState({ id: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oops!", content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Create")));
    }
  }]);

  return AssetNew;
}(_react.Component);

exports.default = AssetNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Fzc2V0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwidHJhY2tlciIsIkxheW91dCIsIkxpbmsiLCJ3ZWIzIiwiUm91dGVyIiwiQXNzZXROZXciLCJzdGF0ZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIm1hbnVmYWN0dXJlciIsInByaWNlIiwiaWQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVBc3NldCIsInNlbmQiLCJmcm9tIiwiZ2FzIiwiZCIsIkRhdGUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBRWhCLEFBQVMsQUFBTSxBQUFRLEFBQVM7O0FBQ2hDLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQVUsQUFDakIsQUFBUyxBQUFjOzs7Ozs7Ozs7SUFFakIsQTs7Ozs7Ozs7Ozs7Ozs7O2dOQUNKLEE7WUFBUSxBQUNBLEFBQ047bUJBRk0sQUFFTyxBQUNiO29CQUhNLEFBR1EsQUFDZDthQUpNLEFBSUMsQUFDUDtVQUxNLEFBS0YsQUFDSjtlQU5NLEFBTUcsQUFDVDtvQkFQTSxBLEFBT1E7QUFQUixBQUNOLGEsQUFTRjsyRkFBVyxpQkFBQSxBQUFNLE9BQU47K0VBQUE7O3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQURTLEFBQ1QsQUFBTTs4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b0JBQUE7c0JBckJKLEFBbUJFLEFBRUUsQUFRRjtBQVJFO0FBQ0UsMkJBT0gsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsMEJBQUEsQUFBQztlQUNRLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxNQUFBLEFBQU0sT0FBdEMsQUFBUyxBQUFjLEFBQXNCO0FBRnpEOztvQkFBQTtzQkEvQkosQUE2QkUsQUFFRSxBQU1GO0FBTkU7QUFDRSwyQkFLSCxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx1QkFBQSxBQUFDO2VBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxJQUFJLE1BQUEsQUFBTSxPQUFuQyxBQUFTLEFBQWMsQUFBbUI7QUFGdEQ7O29CQUFBO3NCQXZDSixBQXFDRSxBQUVFLEFBS0Y7QUFMRTtBQUNFLDJCQUlKLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDtvQkFBbEQ7c0JBNUNGLEFBNENFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7b0JBQXBDO3NCQUFBO0FBQUE7U0FoRE4sQUFDRSxBQUVFLEFBNkNFLEFBTVA7Ozs7O0FBM0ZvQixBLEFBOEZ2Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcGFyYXN0b28vRHJvcGJveC9FdGhlcmV1bS9TdXBwbHlDaGFpbiJ9