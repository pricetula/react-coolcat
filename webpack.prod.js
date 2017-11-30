/* eslint-disable comma-dangle, import/no-extraneous-dependencies */
const merge = require(
  'webpack-merge'
);
const UglifyJSPlugin = require(
  'uglifyjs-webpack-plugin'
);
const webpackServer = require(
  './webpack.common'
);

module.exports = merge(
  webpackServer,
  {
    devtool: 'source-map',
    plugins: [
      new UglifyJSPlugin(
        {
          sourceMap: true
        }
      )
    ]
  }
);
