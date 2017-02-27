const path = require('path');

module.exports = {
  //path to our client-side js folder
  context: path.join(__dirname, 'src'),
  //starting point of our application
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  //specifies how each file should be processed into our bundle
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  //where web pack should look for import or require() statemens
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
