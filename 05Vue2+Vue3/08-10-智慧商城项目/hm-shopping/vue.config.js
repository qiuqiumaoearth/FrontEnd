const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/hm-shopping/' : '/'
})
