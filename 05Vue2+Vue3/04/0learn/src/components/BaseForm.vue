<template>
  <div class="app">
    <div>
      账号: <input v-model="username" type="text">
    </div>
     <div>
      密码: <input v-model="password" type="text">
    </div>
    <!-- <div>
      <button @click="getFormData">获取数据</button>
      <button @click="resetFormData">重置数据</button>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'admin',
      password: '123456',
    }
  },
  methods: {

    //这些方法在父级进行方法中调用使用
    //APP.vue
    // handelGet(){
    //   console.log(this.$refs.baseForm.getValue());
      
    // },
    // handelReset(){
    //   this.$refs.baseForm.resetValue()

    // }


    //方法一:收集表单数据,返回一个对象
    getValue() {
      //console.log('获取表单数据', this.username, this.password);
      return {
        account:this.account,
        passwprd:this.password
      }
    },

    //方法二,重置表单
    resetValue() {
      this.username = ''
      this.password = ''
      console.log('重置表单数据成功');
    },
  }
}
</script>

<style scoped>
.app {
  border: 2px solid #ccc;
  padding: 10px;
}
.app div{
  margin: 10px 0;
}
.app div button{
  margin-right: 8px;
}
</style>