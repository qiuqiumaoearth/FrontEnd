<template>
  <div id="app">
    <h1> {{$store.state.setting.desc}}=> {{ title }} </h1>
    <div>原数组{{ list }}</div>
    <div>筛选>5的数组{{$store.getters.filterList}}</div>
    <input type="text" v-model="value">
    <button @click="changeTit()">修改标题</button>
    <br>
    <input type="text" :value="count" @input="handelInput">
    <button @click="changeCount">修改数值</button>

    <Son1></Son1>
    <hr>
    <Son2></Son2>
    <button @click="changeTitle('你好')">修改标题辅助函数</button>
    <button>姓名:{{uerInfo.name}}</button>
  </div>
</template>

<script>
import Son1 from './components/BaseSon1.vue'
import Son2 from './components/BaseSon2.vue'
import { mapState, mapMutations } from 'vuex'

console.log(mapState(['count', 'title']))

export default {
  name: 'app',
  data: function () {
    return {
      value: '',
      num: 0

    }
  },
  components: {
    Son1,
    Son2
  },
  created () {
    // console.log(this.$store)
  },
  computed: {
    ...mapState(['count', 'title', 'list']),
    ...mapState('user', ['uerInfo'])
  },
  methods: {
    ...mapMutations(['changeTitle']),
    changeTit () {
      this.$store.commit('changeTitle', this.value)
      this.value = ''
    },
    handelInput (e) {
      console.log(+e.target.value)
      this.num = +e.target.value
    },
    changeCount () {
      this.$store.commit('changeCount', this.num)
    }
  }
}
</script>

<style>
#app {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>
