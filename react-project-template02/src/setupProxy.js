// const { createProxyMiddleware } = require('http-proxy-middleware')

// module.exports = function(app) {
//   app.use(
//     createProxyMiddleware('/api', {
//       target: 'http://localhost:18000/', //配置你要请求的服务器地址
//       // pathRewrite: { '^/api': '' },
//       changeOrigin: true,
//     })
//   )
// }

const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(createProxyMiddleware('/api', { target: 'http://localhost:18000/' }))
}
