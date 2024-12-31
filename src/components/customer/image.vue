<template>    
    <div><a-image width='100%' :src='url'></a-image> </div>
</template>
<script setup>
import { inject, ref, watch } from 'vue'

// 组件props
const props = defineProps({
  component: Object,    // 组件配置信息  
})

const url = ref()
const form = inject('formModel')

watch(() => form._rawValue[props.component.dataIndex], () => {
  url.value = form._rawValue[props.component.dataIndex]

  console.info(form)
console.info(props.component)
console.info(url.value)
})


url.value = form._rawValue[props.component.dataIndex]
</script>
