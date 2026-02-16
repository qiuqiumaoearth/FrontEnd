<template>
  <div class="my-tag">
    <input v-if="isEdit"
      ref="inp"
      class="input"
      type="text"
      placeholder="输入标签"
      v-focus
      @blur="isEdit=false"

      :value="value"
      @keyup.enter="handleEnter"
      
    />
    <!-- @blur="处理函数" 的作用就是：当元素失去焦点时，执行指定的处理函数。 -->
    <div class="text" v-else @dblclick="handelClick">
      {{ value }}
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        isEdit:false
      }
    },
    props:{
      value:String
    },
    methods:{
      handelClick(){
        this.isEdit=true

        // //等dom更新完之后,再获取焦点
        // this.$nextTick(()=>{
        //   this.$refs.inp.focus()
        // })
        
      },
      handleEnter(e){
        // console.log('回车');
        // 回车后将子组件传给父亲的传回去,input里面的
        //由于父组件是v-model,触发事件,需要触发input事件
        if (e.target.value.trim()==='') {
          return alert('标签内容不能为空')
        }
        this.$emit('input',e.target.value)
        this.isEdit=false
      }
    }    
  }
</script>

<style lang="less" scoped>
  .my-tag {
    cursor: pointer;
    .input {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      width: 100px;
      height: 40px;
      box-sizing: border-box;
      padding: 10px;
      color: #666;
      &::placeholder {
        color: #666;
      }
    }
  }

</style>