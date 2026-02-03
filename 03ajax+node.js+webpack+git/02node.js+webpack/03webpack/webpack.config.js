const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { networkInterfaces } = require('os')
const { Template } = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

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
      filename: path.resolve(__dirname, 'dist/login/index.html'), //输出文件

    }),
    new MiniCssExtractPlugin()  //生成css文件

  ],

  //加载器
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: ['style-loader', 'css-loader'],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
      }

    ],
  },

  //优化
  optimization: {
    // 最小化
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 
      // `terser-webpack-plugin`），将下一行取消注释（保证 JS 代码还能被压缩处理）
      `...`,
      new CssMinimizerPlugin(),
    ],
  }
};