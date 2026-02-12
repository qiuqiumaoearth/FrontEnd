<template>
  <div >
    我是son组件{{title}}
    <button @click="changeFn">修改title</button>

  </div>
</template>

<script>
  export default {
    //通过props进行接收
    props:['title'],
    methods:{
      changeFn(){
        //通过$emit,向父组件发送消息通知
        this.$emit('changeTitle','传智教育')
      }
    }
    
  }
</script>

<style scoped>
div{
  border: 3px solid #000;
  width: 300px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  margin: 10px 40px;
  
}

</style>