<template>
  <div>
    <!-- <select :value="cityId" @change="handleSelect"> -->
      
      <!-- 用v-model进行简化 -->
      <select :value="value" @change="handleSelect">

      
      <!-- 实现双向绑定,注意props数据,不能被子组件修改,所以不能使用v-model进行双向绑定,只能拆分成原本的value+change -->
      <option value="101">北京</option>
      <option value="102">上海</option>
      <option value="103">武汉</option>
      <option value="104">广州</option>
      <option value="105">深圳</option>
    </select>
  </div>
</template>

<script>
export default {

  //获取来自父组件的数据
  props:{
    // cityId:String

    //用v-model进行简化
    value:String
  },
  methods:{
    handleSelect(e){
      console.log(e.target.value);

      // 将修改后的数据传递给父组件
      // this.$emit('changeId',e.target.value)

      //用v-model进行简化
      this.$emit('input',e.target.value)

    }
  }
}
</script>

<style>
</style>