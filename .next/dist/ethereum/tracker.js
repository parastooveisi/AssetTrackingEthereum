"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _AssetTracker = require("./build/AssetTracker.json");

var _AssetTracker2 = _interopRequireDefault(_AssetTracker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_AssetTracker2.default.interface), //contract ABI
"0x5a702bcb64Fe7c6Eba7B7ae0cFF3FacC422c3E82" //the address that we deployed our contract on
);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3RyYWNrZXIuanMiXSwibmFtZXMiOlsid2ViMyIsIkFzc2V0VHJhY2tlciIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUVqQixBQUFPLEFBQWtCOzs7Ozs7QUFFekIsSUFBTSxlQUFlLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FDNUIsS0FBQSxBQUFLLE1BQU0sdUJBREksQUFDZixBQUF3QixZQUFZO0FBRHJCLEFBRWYsNkNBRkYsQUFBaUIsQUFFOEIsQUFHL0M7QUFMaUI7O2tCQUtqQixBQUFlIiwiZmlsZSI6InRyYWNrZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcGFyYXN0b28vRHJvcGJveC9FdGhlcmV1bS9TdXBwbHlDaGFpbiJ9