import Vue from 'vue'
import VueRouter from "vue-router";
import Layout from '@/views/Layout.vue';
import ArticleDetail from '@/views/ArticleDetail.vue'
import Article from '@/views/Article.vue';
import Collect from '@/views/Collect.vue'
import Like from '@/views/Like.vue'
import User from '@/views/User.vue'

Vue.use(VueRouter)

const router = new VueRouter({

  // /article路径 => article页面
  routes: [
  {
    path:'/',
    component:Layout,
    //定向改造路由界面
    redirect:'/article',
    //通过children 配置项,可以配置嵌套子路由
    //1.在childre配置项 
    children:[{
      path:'/article',
      component:Article
    },{
      path:'/collect',
      component:Collect
    },{
      path:'/like',
      component:Like
    },{
      path:'/user',
      component:User
    }]
  },
  {
    path:'/detail/:id',
    component:ArticleDetail
  }
    
  ]
})

export default router