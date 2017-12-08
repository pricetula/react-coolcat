/* eslint-disable comma-dangle, import/no-extraneous-dependencies */
const path = require(
  'path'
);
const merge = require(
  'webpack-merge'
);
const webpackClient = require(
  './webpack.common'
);

module.exports = merge(
  webpackClient,
  {
    devtool: 'inline-source-map',

    devServer: {
      contentBase: path.resolve(
        __dirname,
        'dist'
      )
    },
  }
);
