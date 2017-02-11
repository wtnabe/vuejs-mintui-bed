var path = require('path');

module.exports = {
  entry: './assets/javascripts/application.js',
  output: {
    path:     path.resolve(__dirname, './public/assets/javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.common"
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]'
        }
      }
    ]
  }
};
