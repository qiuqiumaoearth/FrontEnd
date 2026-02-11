<template>
  <div class="App"> 
    <!-- 头部组件 -->
    <HmHeader></HmHeader>
     

    <!-- 主体组件 -->
     <HmMain></HmMain>

    <!-- 底部组件 -->
     <HmFooter></HmFooter>


  </div>
</template>

<script>

import HmHeader from './components/HmHeader.vue';
import HmFooter from './components/HmFooter.vue';
import HmMain from './components/HmMain.vue';

export default{
  components:{
    //'组件名':组件对象
    HmHeader,
    HmMain,
    HmFooter,


  }

}



</script>

<style>

.App{
  width: 600px;
  height: 700px;
  background-color: #87ceeb;
  margin: 0 auto;
  padding:10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
  
}

</style>