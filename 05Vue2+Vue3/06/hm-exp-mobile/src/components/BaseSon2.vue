<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值:{{ count }}<label></label>
    <br />
    <button @click="subCount(1)">值 - 1</button>
    <h3>主题颜色:{{theme}} &nbsp; &nbsp;<button>修改颜色</button></h3>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Son2Com',
  computed: {
    ...mapState('setting', ['theme']),
    ...mapMutations(),
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    subCount (n) {
      this.$store.commit('subCount', n)
    }
  }
}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
