<template>
  <div>
    <button @click="handleSub">-</button>
    <span>{{ count}}</span>
    <button @click="handleAdd">+</button>
  </div>
</template>

<script>
  export default {
    // data必须是一个函数 => 保证每个组件实例,维护独立的一个数据对象
    // data(){
    //   return {
    //     count:999
    //   }
    // }
    
    //props传过来的数据(外部数据)
    //不能直接修改
    props:{
      count:Number
    },
    methods:{
      handleAdd(){
        //子传父.$emit,让父亲进行修改,谁的数据谁负责
        this.$emit('changeCount',this.count +1)
      },
      handleSub(){
        this.$emit('changeCount',this.count -1)

      }
    }
  }
</script>

<style lang="scss" scoped>
</style>