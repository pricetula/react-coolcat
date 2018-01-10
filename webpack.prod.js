/* eslint-disable comma-dangle, import/no-extraneous-dependencies */
const webpack = require(
  'webpack'
);
const CleanWebpackPlugin = require(
  'clean-webpack-plugin'
);
const path = require(
  'path'
);
const merge = require(
  'webpack-merge'
);
// Tree shaking to remove dead code or unimported modules
const UglifyJSPlugin = require(
  'uglifyjs-webpack-plugin'
);
const ExtractTextPlugin = require(
  'extract-text-webpack-plugin'
);
const webpackCommon = require(
  './webpack.common'
);

const production = merge(
  webpackCommon,
  {
    plugins: [
      new UglifyJSPlugin(
        {
          sourceMap: true
        }
      ),
      new webpack.DefinePlugin(
        {
          // define environment as production
          'process.env.NODE_ENV': JSON.stringify(
            'production'
          )
        }
      ),
    ]
  }
);

module.exports = [
  production,

  // server specific webpack config
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
        filename: 'server.js',
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
              /app.$/
            ]
          }
        ),
        new UglifyJSPlugin(
          {
            sourceMap: true
          }
        ),
        new ExtractTextPlugin(
          {
            filename: '[name].css',
            allChunks: true
          }
        ),
      ]
    }
  )
];
