const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')
module.exports = override(
  addWebpackAlias({
    components: path.resolve(__dirname, 'src/components'),
    '@': path.resolve(__dirname, 'src'),
    views: path.resolve(__dirname, 'src/views'),
  })
)
