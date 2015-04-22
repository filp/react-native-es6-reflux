// Based almost entirely on the configuration included with
// https://github.com/roman01la/react-native-babel
// by Roman Liutikov

var webpack = require("webpack");
var path = require("path");

module.exports = {
  watch: true,
  entry: path.join(__dirname, "/src/main.js"),
  externals: [require("./ignored-modules")],
  module: {
    loaders: [
      {
        test: /\.(js|jsx|es6)$/,
        exclude: /node_modules/,
        loaders: ["babel-loader?optional=runtime"]
      }
    ]
  },
  plugins: [new webpack.NoErrorsPlugin()],
  resolve: { extensions: ["", ".js", ".jsx", ".es6"] },
  output: {
    path: path.join(__dirname, "/"),
    filename: "index.ios.js",
    libraryTarget: "commonjs"
  }
};
