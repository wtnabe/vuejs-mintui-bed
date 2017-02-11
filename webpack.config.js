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
  }
};
