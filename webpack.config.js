var path      = require("path");
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH  = path.resolve(ROOT_PATH, "js");

module.exports = {
  resolve: {
    root: __dirname,
    extensions: ['', '.js']
  },
  entry: APP_PATH,
  output: {
    path: "./template/scripts/",
    filename: "site.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
