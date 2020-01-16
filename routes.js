const routes = require("next-routes")();

routes
  .add("/assets/new", "/assets/new")
  .add("/assets/history/:id", "/assets/history")
  .add("/assets/transfer", "/assets/transfer");

module.exports = routes;
