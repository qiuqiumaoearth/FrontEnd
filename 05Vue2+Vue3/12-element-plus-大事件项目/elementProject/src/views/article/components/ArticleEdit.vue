<script setup>
//抽屉
import { ref } from 'vue'
const visibleDrawer = ref(false)
import ChannelSelect from './ChannelSelect.vue'
import { Plus } from '@element-plus/icons-vue'

// 富文本编辑器
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

// 引入文章相关的服务
import { artPublishService, artGetDetailService, artEditService } from '@/api/article'
import { imageUrlToFile } from '@/utils/request'

import { nextTick } from 'vue'
import { baseURL } from '@/utils/request'

const formModel = ref({
  title: '',
  cate_id: '',
  cover_img: '',
  content: '',
  state: '',
})

const editorRef = ref()
const openDrawer = async (row) => {
  visibleDrawer.value = true
  if (row.id) {
    console.log('编辑回显')
    const res = await artGetDetailService(row.id)
    formModel.value = res.data
    formModel.value.cover_img = res.data.cover_img
    imgUrl.value = baseURL + res.data.cover_img
    // 网络图片转成 file 对象, 需要转换一下
    formModel.value.cover_img = await imageUrlToFile(imgUrl.value, formModel.value.cover_img)
  } else {
    console.log('添加功能')
    //清空表单
    formModel.value = { title: '', cate_id: '', cover_img: '', content: '', state: '' }
    imgUrl.value = ''
    //清空富文本编辑器
    nextTick(() => {
      editorRef.value?.setHTML('')
    })
    // editorRef.value?.setHTML('')
  }
}

//图片处理上传
const imgUrl = ref('')

const onUploadChange = (file) => {
  console.log(file)
  imgUrl.value = URL.createObjectURL(file.raw)
  formModel.value.cover_img = file.raw
}

// 校验表单
const formRef = ref(null)
// 校验规则
const rules = ref({
  title: [{ required: true, message: '请输入文章标题', trigger: 'blur' }],
  cate_id: [{ required: true, message: '请选择文章分类', trigger: 'blur' }],
  cover_img: [{ required: true, message: '请上传文章封面', trigger: 'blur' }],
  content: [{ required: true, message: '请输入文章内容', trigger: 'blur' }],
})

//文章提交
const emit = defineEmits(['success'])

const handleSubmit = async (state) => {
  //将已发布还是草稿设置到formModel中
  formModel.value.state = state === 'publish' ? '已发布' : '草稿'

  const fd = new FormData()

  for (const key in formModel.value) {
    fd.append(key, formModel.value[key])
  }

  // 校验表单
  await formRef.value.validate()

  if (formModel.value.id) {
    //编辑文章
    // console.log('编辑操作')
    await artEditService(fd)
    visibleDrawer.value = false
    emit('success', 'edit')
  } else {
    //添加文章
    // console.log('添加操作')
    await artPublishService(fd)
    visibleDrawer.value = false
    emit('success', 'add')
  }
}

defineExpose({
  openDrawer,
})
</script>

<template>
  <!-- 抽屉 -->
  <el-drawer
    v-model="visibleDrawer"
    :title="formModel.id ? '编辑文章' : '添加文章'"
    direction="rtl"
    size="50%"
  >
    <!-- 发表文章表单 -->
    <el-form :rules="rules" :model="formModel" ref="formRef" label-width="100px">
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="formModel.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="文章分类" prop="cate_id">
        <channel-select v-model="formModel.cate_id" width="100%"></channel-select>
      </el-form-item>
      <el-form-item label="文章封面" prop="cover_img">
        <!-- 需要关闭element-plus的文件上传组件 -->
        <!-- 上传图片的地方 -->
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          :auto-upload="false"
          :on-change="onUploadChange"
        >
          <img v-if="imgUrl" :src="imgUrl" alt="" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>

      <!-- 富文本 -->
      <el-form-item label="文章内容" prop="content">
        <div class="editor">
          <quill-editor
            theme="snow"
            v-model:content="formModel.content"
            ref="editorRef"
            content-type="html"
          />
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit('publish')">发布</el-button>
        <el-button type="info" @click="handleSubmit('draft')">草稿</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<style lang="scss" scoped>
.avatar-uploader {
  :deep() {
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
    .el-upload {
      border: 1px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
    }
    .el-upload:hover {
      border-color: var(--el-color-primary);
    }
    .el-icon.avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      text-align: center;
    }
  }
}
.editor {
  width: 100%;
  :deep(.ql-editor) {
    min-height: 200px;
  }
}
</style>
