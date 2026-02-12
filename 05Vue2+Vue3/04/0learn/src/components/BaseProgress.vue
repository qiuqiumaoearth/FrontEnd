<template>
  <div class="base-progress">
    <div class="inner" :style="{ width: w + '%' }">
      <span>{{ w }}%</span>
    </div>
  </div>
</template>

<script>

export default {
  // props: ['w'],
  // props:{
  //   w:Number //Number,String,Boolean,Array,Object,Function
  // }
  props:{
    w:{
      type:Number,
      // require:true,
      default:0,
      validator(val){
        //console.log(val);
        if (val>=100 || val<=0) {
          console.log('传入值必须是0-100之间');
          return false
        } else {
          return true
        }
      }

    }
  }
}
</script>

<style scoped>
.base-progress {
  height: 26px;
  width: 400px;
  border-radius: 15px;
  background-color: #272425;
  border: 3px solid #272425;
  box-sizing: border-box;
  margin-bottom: 30px;
}
.inner {
  position: relative;
  background: #379bff;
  border-radius: 15px;
  height: 25px;
  box-sizing: border-box;
  left: -3px;
  top: -2px;
}
.inner span {
  position: absolute;
  right: 0;
  top: 26px;
}
</style>