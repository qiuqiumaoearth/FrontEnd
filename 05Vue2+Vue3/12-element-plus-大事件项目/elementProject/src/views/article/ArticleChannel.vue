<script setup>
import { artGetChannelsService, artDelChannelService } from '@/api/article'
import { Edit, Delete } from '@element-plus/icons-vue'
import { ref } from 'vue'
import ChannelEdit from './components/ChannelEdit.vue'

const channelList = ref([])

const getChannelList = async () => {
  const res = await artGetChannelsService()
  channelList.value = res.data
  loading.value = false
  // console.log(res.data)
}

const loading = ref(false)
const dialogRef = ref()

const onEditChannel = (row) => {
  dialogRef.value.open(row)
  console.log(row)
}
const onDelChannel = async (row) => {
  await ElMessageBox.confirm('你确认删除该分类信息吗？', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消',
  })
  await artDelChannelService(row.id)
  ElMessage({ type: 'success', message: '删除成功' })
  getChannelList()
}

const onAddChannel = () => {
  dialogRef.value.open()
}

const onSuccess = () => {
  getChannelList()
}

getChannelList()
</script>

<template>
  <page-container title="文章分类">
    <template #extra>
      <el-button type="primary" @click="onAddChannel"> 添加分类 </el-button>
    </template>

    <el-table :data="channelList" v-loading="loading" style="width: 100%">
      <el-table-column label="序号" width="100" type="index"> </el-table-column>
      <el-table-column label="分类名称" prop="cate_name"></el-table-column>
      <el-table-column label="分类别名" prop="cate_alias"></el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-button
            @click="onEditChannel(row)"
            :icon="Edit"
            circle
            plain
            type="primary"
          ></el-button>
          <el-button
            @click="onDelChannel(row)"
            :icon="Delete"
            circle
            plain
            type="danger"
          ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据" />
      </template>
    </el-table>
    <ChannelEdit ref="dialogRef" @success="onSuccess" />
  </page-container>
</template>
