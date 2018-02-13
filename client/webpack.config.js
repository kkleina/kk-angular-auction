const path                     = require('path');
const webpack                  = require('webpack');
const CommonsChunkPlugin       = require('webpack/lib/optimize/CommonsChunkPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CopyWebpackPlugin        = require('copy-webpack-plugin');
const DefinePlugin             = require('webpack/lib/DefinePlugin');
const ProvidePlugin            = require('webpack/lib/ProvidePlugin');

const ENV  = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

const metadata = {
  baseUrl: '/',
  ENV    : ENV,
  host   : HOST,
  port   : PORT
};

module.exports = {
  devServer: {
    contentBase: 'src',
    historyApiFallback: true,
    host: metadata.host,
    port: metadata.port,
    proxy: {
      '/api/*': {
        target: 'http://localhost:8000',
        secure: false
      }
    }
  },
  devtool: 'source-map',
  entry: {
    'main'  : './src/main.ts',
    'vendor': './src/vendor.ts'
  },
  module: {
    rules: [
      {test: /\.css$/,   loader: 'raw-loader', exclude: /node_modules/},
      {test: /\.css$/,   use: [
        'style-loader',
        'css-loader?-minimize'
      ], exclude: /src/},
      {test: /\.html$/,  loader: 'raw-loader'},
      {test: /\.ts$/,   use: [
        {loader: 'ts-loader', query: {compilerOptions: {noEmit: false}}},
        {loader: 'angular2-template-loader'}
      ]},
      {test: /\.woff$/,  loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
      {test: /\.woff2$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf$/,   loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg$/,   loader: 'url-loader?limit=10000&mimetype=image/svg+xml'},
      {test: /\.eot$/,   loader: 'file-loader'}
    ]
  },
  output: {
    path    : path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity}),
    new CopyWebpackPlugin([{from: './src/index.html', to: 'index.html'}]),
    new DefinePlugin({'webpack': {'ENV': JSON.stringify(metadata.ENV)}}),
    new ProvidePlugin({jQuery: 'jquery', jquery: 'jquery', $: 'jquery'}),
    new ContextReplacementPlugin(
       // To prevent Webpack from resolving paths to lazily loaded modules at the build time
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path.join(__dirname, 'src') // location of your src
    ),
  ],
  resolve: {
    extensions: ['.ts', '.js']
  }
};
