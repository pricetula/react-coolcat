// running dev will cause webpack to look for this config file.
// dev is running with --hot for hot module replacement
/* eslint-disable comma-dangle */
const path = require(
  'path'
);
const HtmlWebpackPlugin = require(
  'html-webpack-plugin'
);
const ExtractTextPlugin = require(
  'extract-text-webpack-plugin'
);

// Constant with our paths
const paths = {
  dist: path.resolve(
    __dirname,
    'dist'
  ),
  clientEntry: path.resolve(
    __dirname,
    'src/client/index.js'
  ),
  serverEntry: path.resolve(
    __dirname,
    'src/server/index.js'
  ),
  client: path.resolve(
    __dirname,
    'src/client'
  ),
  server: path.resolve(
    __dirname,
    'src/server'
  )
};

// Webpack configuration
const clientConfig = {
  entry: [
    'babel-polyfill',
    paths.clientEntry
  ],

  // output of build and bundle.js as build output
  output: {
    path: paths.dist,
    filename: 'bundle.js'
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
        use: [
          'babel-loader' // using babel loader
        ]
      },

      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          {
            use: 'css-loader'
          }
        )
      },

      {
        test: /\.(png|jpg|gif)$/,
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

  // this will generate a file dist/index.html
  plugins: [
    /* Please create another config for client dev to include this plugin
    new HtmlWebpackPlugin(
      {
        title: 'Cool Cat Dev',
        // filename specify new file name
        template: path.join(
          paths.dist,
          'index.html'
        ) // merge our index.html with the plugin one
      }
    ),
    */
    new ExtractTextPlugin(
      'style.css'
    ) // all styles will be bundled to dist by plugin
  ]
};

const serverConfig = {
  entry: [
    'babel-polyfill',
    paths.serverEntry
  ],

  // output of build and bundle.js as build output
  output: {
    path: paths.dist,
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },

  target: 'node',

  node: {
    fs: 'empty'
  },

  // loaders for js or jsx files to be parsed by babel
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // find both js or jsx files
        exclude: /node_modules/,
        use: [
          'babel-loader' // using babel loader
        ]
      }
    ]
  },

  // resolve js or jsx files to be loaded by babel
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

module.exports = [
  serverConfig,
  clientConfig
];
