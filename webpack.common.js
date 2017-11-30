/* eslint-disable comma-dangle, import/no-extraneous-dependencies */
const path = require(
  'path'
);

const ExtractTextPlugin = require(
  'extract-text-webpack-plugin'
);

module.exports = {
  entry: {
    bundle: path.resolve(
      __dirname,
      'src/client/index.js'
    ),
  },

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

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(
          __dirname,
          'src'
        ),
        use: [
          'babel-loader'
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

  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },

  plugins: [
    new ExtractTextPlugin(
      'style.css'
    ),
  ]
};
