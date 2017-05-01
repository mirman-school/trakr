var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: "./src",
  output: {
    path: path.join(__dirname, "public/assets/js"),
    filename: "bundle.js",
    publicPath: "/assets/js"
  },
  devServer: {
    contentBase: "public"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  devtool: "source-map"
}
