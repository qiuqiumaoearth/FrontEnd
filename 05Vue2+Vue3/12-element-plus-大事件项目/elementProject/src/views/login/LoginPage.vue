<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { ref, watch } from 'vue'
import { userRegisterService, userLoginService } from '@/api/user'
import { useUserStore } from '@/stores'
import router from '@/router'

const userStore = useUserStore()

const isRegister = ref(localStorage.getItem('big-user') ? false : true)

const form = ref()

const register = async () => {
  await form.value.validate()
  await userRegisterService(formModel.value)
  // 注册成功后，切换到登录页
  isRegister.value = false
}

const login = async () => {
  await form.value.validate()
  const res = await userLoginService(formModel.value)
  //登录成功返回token
  userStore.setToken(res.token)
  // console.log(res)
  // 登录成功后，切换到首页
  router.push('/')
}

//校验数据和规则
const formModel = ref({
  username: '',
  password: '',
  confirmPassword: '',
})

//blur事件失去焦点,change事件改变的时候
// \S 表示非空白字符 ;正则表达式规则
const rules = ref({
  username: [
    { required: true, message: '请输入用户名/密码', trigger: ['blur'] },
    {
      min: 5,
      max: 10,
      message: '用户名必须是5-10位的字符',
      trigger: 'blur',
    },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: ['blur', 'change'] },
    {
      pattern: /^\S[a-zA-Z0-9]{6,12}$/,
      message: '请输入6-12位字母或数字',
      trigger: ['blur', 'change'],
    },
  ],
  confirmPassword: [
    { required: true, message: '请输入再次密码', trigger: ['blur', 'change'] },
    {
      pattern: /^\S[a-zA-Z0-9]{6,12}$/,
      message: '请输入6-12位字母或数字',
      trigger: ['blur', 'change'],
    },
    {
      validator: (rule, value, callback) => {
        if (value !== formModel.value.password) {
          callback(new Error('两次输入密码不一致'))
        } else {
          callback()
        }
      },
      trigger: ['blur', 'change'],
    },
  ],
})

watch(isRegister, () => {
  // form.value.resetFields()
  formModel.value = {
    username: '',
    password: '',
    confirmPassword: '',
  }
})
</script>

<template>
  <!--
      el-row表示一行，一行分成12分，
      el-col表示一列，span表示占用多少分，
      offset表示偏移多少分

      el-form 表示一个表单，
      el-form-item 表示表单中的每一项
      ref 表示表单的引用，
      size 表示表单的大小，
      autocomplete 表示是否自动完成表单，


  -->
  <el-row class="login-page">
    <el-col :span="12" class="bg"></el-col>
    <el-col :span="6" :offset="3" class="form">
      <el-form
        :model="formModel"
        :rules="rules"
        ref="form"
        size="large"
        autocomplete="off"
        v-if="isRegister"
      >
        <el-form-item>
          <h1>注册</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            v-model="formModel.username"
            :prefix-icon="User"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="formModel.password"
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="confirmPassword">
          <el-input
            v-model="formModel.confirmPassword"
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入再次密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="register" class="button" type="primary" auto-insert-space>
            注册
          </el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" underline="never" @click="isRegister = false"> ← 返回 </el-link>
        </el-form-item>
      </el-form>
      <el-form :model="formModel" :rules="rules" ref="form" size="large" autocomplete="off" v-else>
        <el-form-item>
          <h1>登录</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            v-model="formModel.username"
            :prefix-icon="User"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="formModel.password"
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="flex">
          <div class="flex">
            <el-checkbox>记住我</el-checkbox>
            <el-link type="primary" underline="never">忘记密码？</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" class="button" type="primary" auto-insert-space>登录</el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" underline="never" @click="isRegister = true"> 注册 → </el-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  background-color: #fff;
  .bg {
    background:
      url('@/assets/logo2.png') no-repeat 60% center / 240px auto,
      url('@/assets/login_bg.jpg') no-repeat center / cover;
    border-radius: 0 20px 20px 0;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;
    .title {
      margin: 0 auto;
    }
    .button {
      width: 100%;
    }
    .flex {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
