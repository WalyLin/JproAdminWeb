<template>
    <div v-if="url">
        <a-link @click="showImg"><icon-image /> 查看图片 </a-link>
        <a-image-preview :src="url" v-model:visible="visible" />
    </div>
</template>
<script setup>
import {  ref } from 'vue'

// 组件props
const props = defineProps({
    url: {
    type: String,
  } 
})

const showImg = () => {
  visible.value = true
}
const url = ref()
url.value = props.url
const visible = ref(false)


</script>
