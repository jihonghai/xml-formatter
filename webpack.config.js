const path = require('path')

module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    library: 'XmlFormatter',
    libraryExport: 'default',
    libraryTarget: 'umd',
    filename: 'xml-formatter.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  }
}
