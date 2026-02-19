<template>
  <div id="app">
    <h1>根组件 => {{title}}</h1>
    <input type="text">
    <Son1></Son1>
    <hr>
    <Son2></Son2>
  </div>
</template>

<script>
import Son1 from './components/BaseSon1.vue'
import Son2 from './components/BaseSon2.vue'
import { mapState } from 'vuex'

console.log(mapState(['count', 'title']))

export default {
  name: 'app',
  data: function () {
    return {

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
    ...mapState(['count', 'title'])
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
