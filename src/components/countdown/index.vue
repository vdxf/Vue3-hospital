<template>
  <span>获取验证码({{ time }}s)</span>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
const time = ref<number>(60)
const props = defineProps(['flag'])
const emit = defineEmits(['getFlag'])
watch(
  () => {
    props.flag
  },
  () => {
    const timer = setInterval(() => {
      time.value--
      if (time.value === 0) {
        clearInterval(timer)
        emit('getFlag', false)
      }
    }, 1000)
  },
  { immediate: true }
)
</script>
<style lang="scss" scoped></style>
