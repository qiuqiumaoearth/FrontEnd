<template>
  <div id="app">
    <BaseFocus></BaseFocus>
    <BsaeColor></BsaeColor>
    <BaseLooding></BaseLooding>

    <!-- 2.使用组件时候,组件标签内插入内容 -->
    <MyDialog>你确定要删除吗</MyDialog>
    <MyDialog>你好你好</MyDialog>
    <MyDialog></MyDialog>




  </div>
</template>

<script>

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
    MyDialog

  }
}
</script>

<style>

</style>
