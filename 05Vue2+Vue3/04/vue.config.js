// vue.config.js
const { defineConfig } = require('@vue/cli-service')
const fs = require('fs')
const path = require('path')

// 自动检测 src 下的文件夹，提取开头数字作为页面名称
function getPagesConfig() {
  const pages = {
    // 默认首页（必选）
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '默认首页'
    }
  }

  // 读取 src 目录下的所有文件夹
  const srcDir = path.resolve(__dirname, 'src')
  console.log(`[调试] 检测的 src 目录路径：${srcDir}`) // 新增：打印检测路径，确认路径正确
  
  // 检查 src 目录是否存在
  if (!fs.existsSync(srcDir)) {
    console.error('[错误] src 目录不存在！')
    return pages
  }

  const folders = fs.readdirSync(srcDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
  
  console.log(`[调试] src 下的所有文件夹：${JSON.stringify(folders)}`) // 新增：打印所有文件夹

  // 遍历文件夹，只添加有 main.js 且开头有数字的
  folders.forEach(folderName => {
    const mainJsPath = path.resolve(srcDir, folderName, 'main.js')
    const hasMainJs = fs.existsSync(mainJsPath)
    console.log(`[调试] 文件夹 ${folderName}：是否有 main.js → ${hasMainJs}`) // 新增：打印是否有main.js

    // 1. 存在 main.js  2. 文件夹名开头有数字（增加容错）
    if (hasMainJs) {
      const numMatch = folderName.match(/^\d+/) // 匹配开头数字
      if (numMatch) {
        const pageName = numMatch[0] // 提取数字作为页面名
        pages[pageName] = {
          entry: mainJsPath,
          template: 'public/index.html',
          filename: `${pageName}.html`,
          title: folderName
        }
        console.log(`[成功] 新增页面：${pageName}（对应文件夹：${folderName}）`) // 新增：打印成功添加的页面
      } else {
        console.log(`[跳过] 文件夹 ${folderName}：开头无数字，跳过`) // 新增：打印跳过原因
      }
    }
  })

  // 输出所有页面信息到控制台
  console.log('\n===== 所有可访问的页面 =====')
  Object.keys(pages).forEach(name => {
    const filename = pages[name].filename
    const url = `http://localhost:8080/${filename}`
    console.log(`- ${pages[name].title}: ${url}`)
  })
  console.log('============================\n')

  return pages
}

module.exports = defineConfig({
  pages: getPagesConfig(),
  devServer: {
    port: 8080,
    open: true,
    client: {
      overlay: false
    }
  },
  productionSourceMap: false,
  lintOnSave: false
})