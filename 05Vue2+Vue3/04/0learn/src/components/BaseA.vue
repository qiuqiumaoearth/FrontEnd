<template>
  <div class="base-a">
    我是A组件(接收方)
    <p>{{msg}}</p>  
  </div>
</template>

<script>
import Bus from '../utils/EventBus'
export default {
  created(){
    //在A组件(接收方)中进行监听Bus的事件(订阅消息)
    Bus.$on('sendMsg',(msg)=>{
      console.log(msg);
      this.msg = msg
    })

  },
  data() {
    return {
      msg: '',
    }
  },
}
</script>

<style scoped>
.base-a {
  width: 200px;
  height: 200px;
  border: 3px solid #000;
  border-radius: 3px;
  margin: 10px;
}
p{
  color: #0ff;
}
</style>