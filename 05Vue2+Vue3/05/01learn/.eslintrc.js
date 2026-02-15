module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    // 全局禁用 Babel 配置文件检查（彻底解决所有文件的该报错）
    requireConfigFile: false,
    sourceType: 'module'
  },
  // 关键：让 ESLint 忽略 babel.config.js，避免循环检查
  ignorePatterns: ['babel.config.js'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}