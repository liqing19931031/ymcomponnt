const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.base.js");

module.exports = merge(common, {
  entry: {
    'YmButton': '../ymcop/src/components/YmButton/index.js',
    'YmInput': '../ymcop/src/components/YmInput/index.js',
    'index': '../ymcop/src/index.js'
  },
  mode: "production",
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'antd': 'antd'
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "[name].js",
    library: {
      name: 'YmCop',
      type: "umd"
    },
    clean: true
  }
});