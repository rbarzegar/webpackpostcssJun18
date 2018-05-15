/***** WEBPACK 4 CONFIG FILE, WITH REACT, BABEL AND POSTCSS *****/

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


// Folder settings
const entry = "src/app.js";
const outputPath = "dist";
const outputFilename = "app.bundle.js";

// Webpack settings
module.exports = {
   entry: path.join(__dirname, entry),
   output: {
      path: path.join(__dirname, outputPath),
      filename: outputFilename
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader"
            }
         }, {
            test: /\.css$/,
            use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
         }
      ]
   },
   plugins: [
      new CleanWebpackPlugin('dist', {}),
      new MiniCssExtractPlugin({
         filename: 'style.css',
      }),
      new HtmlWebpackPlugin({inject: false, hash: true, template: './src/index.html', filename: 'index.html'})
   ]
};