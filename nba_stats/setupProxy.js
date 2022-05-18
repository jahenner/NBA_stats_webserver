const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000',
      pathRewrite: { '^/api': '' }
    }
  }
};
