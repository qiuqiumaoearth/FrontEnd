<script setup>
import { artGetChannelsService } from '@/api/article'
import { ref } from 'vue'

const channelList = ref([])
const getChannelList = async () => {
  const res = await artGetChannelsService()
  channelList.value = res.data
  console.log(res.data)
}

defineProps({
  modelValue: {
    type: [Number, String],
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

getChannelList()
</script>

<template>
  <el-select
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', $event)"
    placeholder="请选择文章分类"
  >
    <el-option
      v-for="item in channelList"
      :label="item.cate_name"
      :value="item.id"
      :key="item.id"
    ></el-option>
  </el-select>
</template>

<style scoped>
:deep(.el-select__input-wrapper.is-hidden) {
  position: static;
}
</style>
