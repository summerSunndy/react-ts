const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebapckPlugin= require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: ''
  },
  mode: 'development',
  rules: [{
    test: /\.tsx/,
    exclude: /node_modules/,
    use: [{
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }]
  },{
    test: /\.less/,
    exclude: /node_modules/,
    use: [{
      loader: 'less-loader'
    }]
  }],
  plugins: [
    new HtmlWebpackPlugin({

    }),
    new ExtractTextWebapckPlugin({

    })
  ]
}
