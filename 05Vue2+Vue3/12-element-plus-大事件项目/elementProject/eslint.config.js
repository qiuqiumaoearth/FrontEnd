// .eslintrc.js (ESM 格式，适配 "type": "module")
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginOxlint from 'eslint-plugin-oxlint'
import pluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default defineConfig([
  // 1. 文件范围与忽略规则
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,js,mjs,jsx}'],
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  // 2. 基础语言配置
  {
    languageOptions: {
      globals: { ...globals.browser },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

  // 3. 先禁用 ESLint 内置格式化规则（避免与 Prettier 冲突）
  eslintConfigPrettier,

  // 4. 基础规则集
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  // 5. Oxlint 规则
  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),

  // 6. Prettier + Vue 自定义规则（优先级最高）
  {
    plugins: { prettier: pluginPrettier },
    rules: {
      'prettier/prettier': [
        'error', // 强制生效，确保保存时修复
        {
          singleQuote: true,
          semi: false,
          printWidth: 80,
          trailingComma: 'none',
          endOfLine: 'auto',
        },
      ],
      'vue/multi-word-component-names': ['warn', { ignores: ['index'] }],
      'vue/no-setup-props-destructure': 'off',
      'no-undef': 'error',
    },
  },
])
