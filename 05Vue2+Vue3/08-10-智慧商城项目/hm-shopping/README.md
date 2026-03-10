# 🛒 vuex-cart

## 📖 项目简介

vuex-cart 是一个基于 Vue.js 和 Vuex 开发的经典响应式购物车示例项目。该项目旨在演示如何在复杂的业务场景下，利用 Vuex 进行高效的状态管理，实现商品、购物车与订单数据之间的无缝同步。

## 🌟 核心功能

商品展示：从模拟接口获取数据并动态渲染商品列表。

购物车交互：

- 一键加购：支持将商品实时添加到购物车。

- 数量调整：在购物车中动态增加或减少商品数量，同步更新库存与总价。

- 移除商品：支持从购物车中删除指定项。

- 状态同步：全局共享商品库存状态与购物车数据，确保多组件间数据一致。

- 结算逻辑：实时计算商品小计（Subtotal）与全站订单总金额。

- 响应式布局：采用简洁的 UI 设计，完美适配移动端。

## 🛠️ 技术栈

前端核心框架：Vue.js 2.x（采用声明式渲染与组件化开发）

全局状态管理：Vuex 3.x（负责处理复杂的组件间通信与数据流）

构建与脚手架：Vue CLI（提供现代化的 Web 开发环境）

包管理工具：Yarn（高效、可靠的依赖管理）

组件通信：Props & Events / Vuex Actions

代码规范：ESLint (JavaScript 代码检查)

## 📂 目录结构

```Plaintext
src/
├── api/ # 模拟后端数据接口 (shop.js)
├── components/ # 公共 UI 组件
│ ├── ProductList.vue # 商品展示组件
│ └── ShoppingCart.vue # 购物车操作组件
├── store/ # Vuex 状态管理核心
│ ├── modules/ # 模块化 Store (products.js, cart.js)
│ └── index.js # Store 入口配置
├── App.vue # 应用主根组件
└── main.js # 项目入口文件
```

## ⚙️ Vuex 核心逻辑说明

本项目采用了 Vuex 的**模块化（Modules）**方案，将逻辑拆分为两个核心模块：

- Products 模块：维护商品列表、价格及实时库存。

- Cart 模块：维护购物车清单、计算总金额，并处理“结账”操作。

- Actions: 处理异步请求（如模拟 API 调用）并提交 Mutation。

- Mutations: 唯一允许修改 State 的地方，确保状态变更可追踪。

- Getters: 类似计算属性，用于派生出购物车总价等数据。

## 🚀 快速开始

1. 环境准备
   确保你的电脑已安装 `Node.js`

2. 克隆与安装`Bash`

   克隆仓库:git clone <https://github.com/你的用户名/vuex-cart.git>

   进入项目目录:`cd vuex-cart`

   安装所有依赖:`yarn install`

3. 开发环境运行
   启动热更新服务器`yarn serve`
   启动后访问：<http://localhost:8080>
   生产环境构建`yarn build`
