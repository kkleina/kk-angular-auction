const path = require('path');

// Webpack and its plugins
const webpack                  = require('webpack');
const CommonsChunkPlugin       = require('webpack/lib/optimize/CommonsChunkPlugin');
const CompressionPlugin        = require('compression-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CopyWebpackPlugin        = require('copy-webpack-plugin');
const DedupePlugin             = require('webpack/lib/optimize/DedupePlugin');
const DefinePlugin             = require('webpack/lib/DefinePlugin');
const OccurrenceOrderPlugin    = require('webpack/lib/optimize/OccurrenceOrderPlugin');
const ProvidePlugin            = require('webpack/lib/ProvidePlugin');
const UglifyJsPlugin           = require('webpack/lib/optimize/UglifyJsPlugin');

const ENV = process.env.NODE_ENV = 'production';
const metadata = {
  baseUrl: '/',
  ENV    : ENV
};

module.exports = {
  devtool: 'source-map',
  entry: {
    'main'  : './src/main.ts',
    'vendor': './src/vendor.ts'
  },
  module: {
    rules: [
      {test: /\.css$/,   use: [
        'to-string-loader',
        'css-loader'
      ], exclude: /node_modules/},
      {test: /\.css$/,   use: [
        'style-loader',
        'css-loader'
      ], exclude: /src/},
      {test: /\.html$/,  loader: 'html-loader?caseSensitive=true'},
      {test: /\.ts$/,   use: [
        {loader: 'ts-loader', query: {compilerOptions: {noEmit: false}}},
        {loader: 'angular2-template-loader'}
      ]},
      {test: /\.woff$/,  loader: "url-loader?limit=10000&minetype=application/font-woff"},
      {test: /\.woff2$/, loader: "url-loader?limit=10000&minetype=application/font-woff"},
      {test: /\.ttf$/,   loader: "url-loader?limit=10000&minetype=application/octet-stream"},
      {test: /\.svg$/,   loader: "url-loader?limit=10000&minetype=image/svg+xml"},
      {test: /\.eot$/,   loader: "file-loader"}
    ]
  },
  output: {
    path    : path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity}),
    new CompressionPlugin({regExp: /\.css$|\.html$|\.js$|\.map$/, threshold: 1500}),
    new CopyWebpackPlugin([{from: './src/index.html', to: 'index.html'}]),
    new ContextReplacementPlugin(
       // To prevent Webpack from resolving paths to lazily loaded modules at the build time
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path.join(__dirname, 'src') // location of your src
    ),
    new DefinePlugin({'webpack': {'ENV': JSON.stringify(metadata.ENV)}}),
    new OccurrenceOrderPlugin(true),
    new UglifyJsPlugin({
      compress : {screw_ie8 : true},
      mangle: {screw_ie8 : true, keep_fnames: true}
    }),
    new ProvidePlugin({jQuery: 'jquery', jquery: 'jquery', $: 'jquery'})
  ],
  resolve: {
    extensions: ['.ts', '.js']
  }
};
