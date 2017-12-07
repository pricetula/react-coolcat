/* eslint-disable comma-dangle, import/no-extraneous-dependencies */
const path = require(
  'path'
);
const HtmlWebpackPlugin = require(
  'html-webpack-plugin'
);
const {
  BundleAnalyzerPlugin
} = require(
  'webpack-bundle-analyzer'
);
const webpack = require(
  'webpack'
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
    vendor: [
      'react',
      'react-router',
      'react-dom'
    ]
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
    new HtmlWebpackPlugin(
      {
        cache: true,
        favicon: path.resolve(
          __dirname,
          'dist/assets/icon.ico'
        ),
        chunks: [
          'common',
          'bundle'
        ],
        template: './html-template.html'
      }
    ),
    new webpack.optimize.CommonsChunkPlugin(
      {
        name: 'common',
        chunks: [
          'vendor',
          'bundle'
        ]
      }
    ),
    new BundleAnalyzerPlugin(
    ),
    new ExtractTextPlugin(
      'style.css'
    )
  ]
};
