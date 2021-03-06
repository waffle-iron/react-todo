/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
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
        context: 'src',
        from: '**/*.*(html|css)',
        to: path.join(__dirname, 'build')
      }
    ])
  ]
}
