/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './app/index.jsx',
  output: {
    path: './build',
    filename: 'app.js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js(x)?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: 'app',
        from: '**/*.html',
        to: path.join(__dirname, 'build')
      }
    ])
  ]
}
