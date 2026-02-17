<template>
  <div id="app">
    <div class="top">
      <!-- tag,默认是a标签,可以渲染成其他标签  tag="h1"-->
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/friend">朋友</router-link>

    </div>


    <router-view></router-view>


    <MyTable :data="list">
      <!-- 3.通过template #插槽名="变量名" => 进行接收 -->
      <template #default="obj">

        <!-- 获得了slot里面的数据 -->
        <!-- {{obj}} -->
        <button @click="del(obj.rowdata.id)">删除</button>
      </template>
    </MyTable>
    <MyTable :data="list2">
      <template #default="{rowdata}">
        <button @click="cheak(rowdata)">查看</button>
      </template>
      
    </MyTable>
    <br/>
    <BaseFocus></BaseFocus>
    <BsaeColor></BsaeColor>
    <BaseLooding></BaseLooding>

    <!-- 2.使用组件时候,组件标签内插入内容 -->
    <MyDialog>
      <template v-slot:head>你好</template>

      <template #content>我的世界</template>
      <template v-slot:del>离开</template>
      <template v-slot:com>进入</template>
    </MyDialog>

    <MyDialog>

    </MyDialog>






  </div>
</template>

<script>
import MyTable from './components/MyTable.vue';
import BaseFocus from './components/BaseFocus.vue';
import BsaeColor from './components/BsaeColor.vue';
import BaseLooding from './components/BaseLooding.vue';
import MyDialog from './components/MyDialog.vue';


export default {
  name: 'App',
  components: {
    BaseFocus,
    BsaeColor,
    BaseLooding,
    MyDialog,
    MyTable

  },
  data(){
    return {
      list: [
        { id: 1, name: '张小花', age: 18 },
        { id: 2, name: '孙大明', age: 19 },
        { id: 3, name: '刘德忠', age: 17 },
      ],
      list2: [
        { id: 1, name: '赵小云', age: 18 },
        { id: 2, name: '刘蓓蓓', age: 19 },
        { id: 3, name: '姜肖泰', age: 17 },
      ]
    }

  },
  methods:{
    del(id){
      // console.log(id);
      this.list=this.list.filter(item=>item.id!==id)
    },
    cheak(item){
      // console.log(`姓名:${item.name},年龄:${item.age}`);
      alert(`姓名:${item.name},年龄:${item.age}`)
    }
    
  }
}
</script>

<style>
.top a.router-link-active{
  background-color: pink;
}
</style>
