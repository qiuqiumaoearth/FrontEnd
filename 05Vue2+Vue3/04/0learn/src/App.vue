<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <BaseOne></BaseOne>
    <BaseTwo></BaseTwo>
    <BaseCount></BaseCount>
    <br/>
    <div class="dad">我是app组件
      <!-- 父组件,对消息进行监听 -->
      <BaseSon :title="myTitle" @changeTitle="handleChange"></BaseSon>
    </div>
    <br/>

    <div class="userinfo">
      <UserInfo
        :username="username"
        :age="age"
        :isSingle="isSingle"
        :car="car"
        :hobby="hobby"
      ></UserInfo>
    </div>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import BaseOne from './components/BaseOne.vue';
import BaseTwo from './components/BaseTwo.vue';
import BaseCount from './components/BaseCount.vue';
import BaseSon from './components/BaseSon.vue';
import UserInfo from './components/UserInfo.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    BaseOne,
    BaseTwo,
    BaseCount,
    BaseSon,
    UserInfo
  },
  data(){
    return {
      myTitle:':学习前端',
      username: '小帅',
      age: 28,
      isSingle: true,
      car: {
        brand: '宝马',
      },
      hobby: ['篮球', '足球', '羽毛球'],
    }
  },
  methods:{
    //提供处理函数,提供逻辑
    handleChange(newTitle){
      console.log(newTitle);
      this.myTitle=newTitle
    }
  }
}
</script>

<style>
.dad{
  border: 3px solid #000;
  width: 400px;
  height: 150px;
  text-align: center;
  line-height: 50px;
  margin: 10px;


}


</style>
