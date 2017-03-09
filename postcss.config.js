var path = require('path')

module.exports = {
  plugins: {
    'postcss-import': {
      path: path.join(__dirname, 'app')
    },
    'postcss-mixins': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%']
    }
  }
}
