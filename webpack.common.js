// running dev will cause webpack to look for this config file.
// dev is running with --hot for hot module replacement
/* eslint-disable comma-dangle, import/no-extraneous-dependencies */
const webpack = require(
  'webpack'
);
const path = require(
  'path'
);
const ExtractTextPlugin = require(
  'extract-text-webpack-plugin'
);

// Webpack configuration
module.exports = {
  // entry file for our apps code
  entry: {
    bundle: path.resolve(
      __dirname,
      'src/client/index.js'
    ),
    // create a new entry file containing our app dependencies
    vendor: [
      'react',
      'react-dom',
      'react-router-dom'
    ]
  },
  // output of server.js and bundle.js as build output (name in property of entry)
  output: {
    path: path.resolve(
      __dirname,
      'dist'
    ),
    filename: '[name].js'
  },

  node: {
    fs: 'empty'
  },

  // loaders for js or jsx files to be parsed by babel
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // find both js or jsx files
        exclude: /node_modules/,
        include: path.resolve(
          __dirname,
          'src'
        ),
        use: [
          'babel-loader' // using babel loader
        ]
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: path.resolve(
          __dirname,
          'src'
        ),
        loader: ExtractTextPlugin.extract(
          {
            use: 'css-loader'
          }
        )
      },

      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        include: path.resolve(
          __dirname,
          'src'
        ),
        use: [
          'file-loader'
        ]
      }
    ]
  },

  // resolve js or jsx files to be loaded by babel
  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new ExtractTextPlugin(
      'style.css'
    ),
    new webpack.optimize.CommonsChunkPlugin(
      {
        name: 'vendor',
        minChunks: Infinity,
      }
    ),
  ]
};
