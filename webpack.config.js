const path = require('path');
const fs = require('fs');
const ExtractStringsPlugin = require('webpack-extract-oftn-l10n');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  target: 'node',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new ExtractStringsPlugin({
    variable: 'R',
    output: path.join(__dirname, 'lang/default.json')
  })]
};