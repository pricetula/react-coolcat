/* eslint-disable comma-dangle, import/no-extraneous-dependencies */
const path = require(
  'path'
);
const merge = require(
  'webpack-merge'
);
const webpackCommon = require(
  './webpack.common'
);

module.exports = merge(
  webpackCommon,
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
