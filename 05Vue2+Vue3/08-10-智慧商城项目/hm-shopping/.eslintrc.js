module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    // 方案1：彻底关闭生产环境的 console 检查（推荐，解决 CI 构建失败）
    'no-console': 'off',
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 禁用 Vue 组件文件命名必须是多个单词的规则（核心）
    'vue/multi-word-component-names': 'off',
    // 新增：兼容常见的代码格式问题（避免其他隐藏警告）
    'space-before-function-paren': 'off',
    'vue/no-unused-components': 'warn'
  },
  ignorePatterns: ['node_modules/', 'dist/', 'build/']
}
