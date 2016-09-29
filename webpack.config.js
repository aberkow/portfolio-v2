const path = require('path');
const webpack = require('webpack');

//plugins to handle transpiling scss to css and making sure they're separate from the js
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractCssBlockPlugin = require('extract-css-block-webpack-plugin');

const CopyPlugin = require('copy-webpack-plugin');

//bring in bourbon/neat to allow for mixins and grid
const bourbon = require('node-bourbon').includePaths;
const neat = require('node-neat').includePaths[1];

module.exports ={
  entry: {
    index: path.resolve(__dirname, './js/index.js')
  },
  //give everything a name and put it in the build folder.
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style?sourceMap', 'css?sourceMap!sass?includePaths[]=' + bourbon + '&includePaths[]=' + neat)
      }
    ]
  },
  plugins: [
    //allow the stylesheet to be explicitly named
    new ExtractTextPlugin('[name].css'),
    //allow for multiple stylesheets using /*! start:.../* /*! end...*/
    new ExtractCssBlockPlugin(),
    new CopyPlugin()
  ],
  resolve: {
    moduleDirectories: ['node_modules'],
    extensions: ['', '.js', '.css']
  }
};
