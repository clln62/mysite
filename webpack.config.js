const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');

module.exports = {
  entry: './client/src/App.jsx',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        { 
          test: /\.(js|jsx)$/, exclude: /node_modules/, 
          use: {
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        },
        {
          test: /\.css$/,
          include: SRC_DIR,
          loader: 'css-loader'
        }
    ]
  },
};