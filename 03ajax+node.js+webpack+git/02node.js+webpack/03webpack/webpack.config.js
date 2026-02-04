const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { networkInterfaces } = require('os')
// const { Template } = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webpack = require('webpack');
const { resolve } = require('dns');

const config = {
  //打包的模式(development 开发模式-使用相关内置优化)
  mode: 'development',

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
      useCdn: process.env.NODE_ENV === 'production'

    }),
    new MiniCssExtractPlugin({
      filename: './login/index.css'
    }),  //生成css文件
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],

  //加载器
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: ['style-loader', 'css-loader'],
        use: [process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.less$/i,
        use: [process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/[hash][ext][query]'
        }
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

  //解析
  , resolve: {
    //别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
};

//开发环境下使用
if (process.env.NODE_ENV === 'development') {
  config.devtool = 'inline-source-map'
}

//生产环境下使用
if (process.env.NODE_ENV === 'production') {
  // 外部扩展（让 webpack 防止 import 的包被打包进来）
  config.externals = {
    // key：import from 语句后面的字符串
    // value：留在原地的全局变量（最好和 cdn 在全局暴露的变量一致）
    'bootstrap/dist/css/bootstrap.min.css': 'bootstrap',
    'axios': 'axios'
  }
}

module.exports = config