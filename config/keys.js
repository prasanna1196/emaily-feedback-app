// To Choose between developer and production environment

if (process.env.NODE_ENV === "production") {
  // We are in production environment
  module.exports = require("./prod");
} else {
  // We are in developer environment
  module.exports = require("./dev");
}
