/* eslint-disable comma-dangle, import/no-extraneous-dependencies */
const CleanWebpackPlugin = require(
  'clean-webpack-plugin'
);

const path = require(
  'path'
);

const merge = require(
  'webpack-merge'
);

const UglifyJSPlugin = require(
  'uglifyjs-webpack-plugin'
);

const webpackServer = require(
  './webpack.common'
);

const production = merge(
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

module.exports = [
  production,

  Object.assign(
    {},

    production,

    {
      entry: {
        server: path.resolve(
          __dirname,
          'src/server/index.js'
        )
      },

      output: {
        path: path.resolve(
          __dirname,
          'dist'
        ),
        filename: 'bundle.server.js',
        libraryTarget: 'commonjs2'
      },

      target: 'node',

      plugins: [
        new CleanWebpackPlugin(
          [
            'dist'
          ],
          {
            exclude: [
              'index.html',
              'bundle.js'
            ]
          }
        ),
        new UglifyJSPlugin(
          {
            sourceMap: true
          }
        )
      ]
    }
  )
];
