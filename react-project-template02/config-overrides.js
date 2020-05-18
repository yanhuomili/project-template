const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path')
module.exports = override(
  // 配置路径别名
  addWebpackAlias({
    components: path.resolve(__dirname, 'src/components'),
    '@': path.resolve(__dirname, 'src'),
    views: path.resolve(__dirname, 'src/views'),
  })
  // antd按需加载
  // fixBabelImports('import', {
  //   libraryName: 'antd',
  //   libraryDirectory: 'es',
  //   style: 'css',
  // })
)
