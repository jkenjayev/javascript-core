"use strict";

let path = require("path");

module.exports = {
  module: "production",
  entry: "./script.js",
  output: {
    filename: "bundle.js"
  },
  watch: true,
  devtool: "source-map"
}