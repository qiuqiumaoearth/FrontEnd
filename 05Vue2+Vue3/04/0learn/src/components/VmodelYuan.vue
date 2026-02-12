<template>
  <div>
    <div id="app" >
      <input v-model="msg1" type="text">
      <br/>
      <input :value="msg2" @input="msg = $event.target.value" type="text">
    </div>
    
  </div>
</template>

<script>
  export default {
    data(){
      return {
        msg1:'123',
        msg2:'456'
      }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>