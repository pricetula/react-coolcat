/* eslint-disable comma-dangle, import/no-extraneous-dependencies */
const HashOutput = require(
  'webpack-plugin-hash-output'
);
const path = require(
  'path'
);
const CleanWebpackPlugin = require(
  'clean-webpack-plugin'
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
    // Applications bundled file
    bundle: path.resolve(
      __dirname,
      'src/client/index.js'
    ),
    // Commonly used packages bundled to another file to reduce bundle.js file size
    vendor: [
      'react',
      'react-router',
      'react-dom'
    ]
  },

  output: {
    // Output or where bundled filed will be placed ie dist/
    path: path.resolve(
      __dirname,
      'dist'
    ),
    // Each bundled file will have specific name taking keys of entry point config
    // [chunkhash] used to create hashed values for the file name
    filename: 'app.[name].[chunkhash].js'
  },

  node: {
    // fs always complains package doesnt exist so we specify empty to stop them errors
    fs: 'empty'
  },

  module: {
    rules: [
      {
        // Look for either .js or .jsx files and compile them using loader specified
        test: /\.(js|jsx)$/,
        // Dont look for files in node_modules
        exclude: /node_modules/,
        // Look for files to be compiled only in src/ directory
        include: path.resolve(
          __dirname,
          'src'
        ),
        // loaders to be used for compiling specified files
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
        // TODO check out more about this
        // I think it looks for all .css file modules
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
    // Resolve .js or .jsx files so importing these files doesnt require the extensions
    extensions: [
      '.js',
      '.jsx'
    ]
  },

  plugins: [
    new HtmlWebpackPlugin(
      {
        // Make sure to link files only when changed ie different hash
        cache: true,
        // Specify the path to ico logo for the web page
        favicon: path.resolve(
          __dirname,
          'dist/assets/icon.ico'
        ),
        // Specify the files which should be linked
        chunks: [
          'vendor',
          'bundle'
        ],
        // Specify template which this plugin will use to create our dist/index.html bundled file
        template: path.resolve(
          __dirname,
          'dist/assets/html-template.html'
        )
      }
    ),
    new webpack.optimize.CommonsChunkPlugin(
      {
        names: [
          'vendor',
          'bundle'
        ]
      }
    ),
    new HashOutput(
    ),
    new BundleAnalyzerPlugin(
      {
        reportFilename: path.resolve(
          __dirname,
          'dist/report.html'
        ),
        openAnalyzer: false,
        analyzerMode: 'static'
      }
    ),
    new ExtractTextPlugin(
      'style.css'
    ),
    new CleanWebpackPlugin(
      [
        'dist'
      ],
      {
        exclude: [
          'assets',
        ]
      }
    )
  ]
};
