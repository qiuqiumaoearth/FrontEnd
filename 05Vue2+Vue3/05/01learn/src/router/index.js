import FindZu from '@/views/FindZu.vue'
import MyZu from '@/views/MyZu.vue'
import FriendZu from '@/views/FriendZu.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'

//安装注册
Vue.use(VueRouter)

//创建路由对象
const router = new VueRouter({
  //routes 路由规则们
  //{path:'路径',component:组件名}
  routes:[
    {path:'/find',component:FindZu},
    {path:'/my',component:MyZu},
    {path:'/friend',component:FriendZu},


  ]
})

export default router