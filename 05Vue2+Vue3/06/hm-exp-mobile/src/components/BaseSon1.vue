<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: {{count}}<label></label>
    <br>
    <button @click="addCount(1)">值 + 1</button>
    <button @click="addCount(5)">值 + 5</button>
    <button @click="setAsyncCount(666)">一秒后666</button>
    <h3>用户:{{$store.state.user.uerInfo.name}} &nbsp; &nbsp;<button>修改用户</button></h3>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Son1Com',
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    ...mapActions(['setAsyncCount']),
    addCount (n) {
      this.$store.commit('addCount', n)
    }

  }
}
</script>

<style lang="css" scoped>
.box{
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
