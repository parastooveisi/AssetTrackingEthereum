"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//creating an instance and ripping out the Metamask injected provider
var web3 = void 0; //we will modify this variable(let)

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  //users with meta metamask
  //to check if we are in the browser and metamask is running
  //type of is for checking if variable id defined
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  //without metamask
  // We are on the server OR the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider( // creating our own provider
  "https://rinkeby.infura.io/SDM4Fg05tjRsEKoN1ZnE");
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFDQTtBQUNBLElBQUksWUFBSixBLEdBQVU7O0FBRVYsSUFBSSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxPQUFPLEFBQWQsU0FBdUIsQUFBNUQsYUFBeUUsQUFDdkU7QUFDQTtBQUNBO0FBQ0E7U0FBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUNEO0FBTEQsT0FLTyxBQUNMO0FBQ0E7QUFDQTtNQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixjQUFpQyxBQUNoRDtBQURlLEFBQWpCLEFBR0E7U0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0Q7QUFFRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3BhcmFzdG9vL0Ryb3Bib3gvRXRoZXJldW0vU3VwcGx5Q2hhaW4ifQ==