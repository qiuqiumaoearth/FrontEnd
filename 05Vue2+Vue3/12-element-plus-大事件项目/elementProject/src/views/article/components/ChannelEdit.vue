<script setup>
import { ref } from 'vue'
import { artAddChannelService, artEditChannelService } from '@/api/article'

const dialogVisible = ref(false)
const formData = ref({
  cate_name: '',
  cate_alias: '',
})

const emit = defineEmits(['success'])

// 先进行校验,让后传递表单
const formRef = ref()
const submitForm = async () => {
  // 校验表单
  await formRef.value.validate()

  if (!formData.value.id) {
    // 添加分类
    await artAddChannelService(formData.value)
  } else {
    // 编辑分类
    await artEditChannelService(formData.value)
  }
  dialogVisible.value = false
  emit('success')
}

// 定义打开弹窗的方法
const open = async (row) => {
  dialogVisible.value = true
  // console.log(row)
  formData.value = { ...row }
}

const rules = ref({
  cate_name: [
    { required: true, message: '请输入分类名称', trigger: 'blur' },
    {
      pattern: /^\S{1,10}$/,
      message: '分类名称只能包含1-10个非空格字符',
      trigger: 'blur',
    },
  ],
  cate_alias: [
    { required: true, message: '请输入分类别名', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{1,10}$/,
      message: '分类别名只能包含1-10个字母、数字',
      trigger: 'blur',
    },
  ],
})

defineExpose({
  open,
})
</script>

<template>
  <el-dialog v-model="dialogVisible" :title="formData.id ? '编辑分类' : '添加分类'" width="30%">
    <el-form
      :model="formData"
      :rules="rules"
      ref="formRef"
      label-width="100px"
      style="padding-right: 30px"
    >
      <el-form-item label="分类名称" prop="cate_name">
        <el-input v-model="formData.cate_name" placeholder="请输入分类名称" />
      </el-form-item>

      <el-form-item label="分类别名" prop="cate_alias">
        <el-input v-model="formData.cate_alias" placeholder="请输入分类别名" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitForm"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
