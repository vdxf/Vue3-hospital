<template>
  <Detail v-if="$route.query.orderId"></Detail>
  <AllOrder v-else></AllOrder>
</template>
<script lang="ts" setup>
import AllOrder from './allOrder/index.vue'
import Detail from './detail/index.vue'
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

onBeforeMount(() => {})
</script>
<style lang="scss" scoped></style>
