const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { networkInterfaces } = require('os')
const { Template } = require('webpack')

module.exports = {
  //入口
  entry: path.resolve(__dirname, 'src/login/index.js'),

  //出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './login/index.js',
    clean: true //生成打包后内容之前,清空输出目录
  },

  //插件(给webpack提供更多功能)
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/login.html'),//模板文件
      filename: path.resolve(__dirname, 'dist/login/index.html') //输出文件
    })

  ]
}