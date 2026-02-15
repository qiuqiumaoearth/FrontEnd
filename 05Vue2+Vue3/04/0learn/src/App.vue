<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <BaseOne></BaseOne>
    <BaseTwo></BaseTwo>
    <BaseCount :count="count" @changeCount="handleCount"></BaseCount>
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

    <div class="baseprogress">
      <BaseProgress :w="width"></BaseProgress>
    </div>

    <br/>
    <BaseA></BaseA>
    <BaseB></BaseB>

    <br/>
    <VmodelYuan></VmodelYuan>

    <br/>
    <!-- <BaseSelect :cityId="selectId" @changeId="selectId = $event"></BaseSelect> -->

    <!-- 用v-model进行简化 v-model的本质就是 :value + @input -->
    <BaseSelect v-model="selectId"></BaseSelect>

    <br/>
    <button class="logout" @click="openDialog">退出按钮</button>
    <BaseDialog :visible.sync="isShow"></BaseDialog>

    <br/>
    <BaseChart></BaseChart>

    <br/>
    <BaseForm ref = "baseForm"></BaseForm>
    <br/>
    <button @click="handelGet">获取数据</button>
    <button @click="handelReset">重置数据</button>

    <br/>
    <br/>

    <BaseAocns></BaseAocns>




  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import BaseOne from './components/BaseOne.vue';
import BaseTwo from './components/BaseTwo.vue';
import BaseCount from './components/BaseCount.vue';
import BaseSon from './components/BaseSon.vue';
import UserInfo from './components/UserInfo.vue'
import BaseProgress from './components/BaseProgress.vue'

import BaseA from './components/BaseA.vue';
import BaseB from './components/BaseB.vue';

import VmodelYuan from './components/VmodelYuan.vue';

import BaseSelect from './components/BaseSelect.vue';

import BaseDialog from './components/BaseDialog.vue';

import BaseChart from './components/BaseChart.vue';

import BaseForm from './components/BaseForm.vue';

import BaseAocns from './components/BaseAocns.vue'





export default {

  name: 'App',
  components: {
    // HelloWorld
    BaseOne,
    BaseTwo,
    BaseCount,
    BaseSon,
    UserInfo,
    BaseProgress,
    BaseA,
    BaseB,
    VmodelYuan,
    BaseSelect,
    BaseDialog,
    BaseChart,
    BaseForm,
    BaseAocns

    
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
      width:87,
      count:100,
      selectId: '102',
      isShow:false
    }
  },
  methods:{
    //提供处理函数,提供逻辑
    handleChange(newTitle){
      console.log(newTitle);
      this.myTitle=newTitle
    },
    handleCount(newCount){
      console.log(newCount);
      this.count=newCount
    },
    openDialog(){
      this.isShow=true
    },
    handelGet(){
      console.log(this.$refs.baseForm.getValue());
      
    },
    handelReset(){
      this.$refs.baseForm.resetValue()

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
