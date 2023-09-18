<template>
  <div class="region">
    <div class="content">
      <div class="left">地区：</div>
      <ul>
        <li :class="{ active: activeFlag === '' }" @click="handleRemove">全部</li>
        <li
          v-for="region in regionArr"
          :key="region.value"
          @click="handleChnageRegion(region.value)"
          :class="{ active: activeFlag === region.value }"
        >
          {{ region.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reqLevelAndRegion } from '@/api/home'
import type { HospitalLevelAndRegionResponse, HospitalLevelAndRegionArr } from '@/api/home/type'
import { onMounted, ref } from 'vue'

onMounted(() => {
  getRegion()
})
const regionArr = ref<HospitalLevelAndRegionArr>([])
const getRegion = async () => {
  const res: HospitalLevelAndRegionResponse = await reqLevelAndRegion('Beijin')
  if (res.code === 200) {
    regionArr.value = res.data
  }
}
const activeFlag = ref<string>('')
const emit = defineEmits(['getRegion'])
const handleChnageRegion = (region: string) => {
  activeFlag.value = region
  emit('getRegion', region)
}
const handleRemove = () => {
  activeFlag.value = ''
  emit('getRegion', '')
}
</script>
<style lang="scss" scoped>
.region {
  color: #666;
  margin-top: 10px;
}
.content {
  display: flex;
  .left {
    margin-right: 10px;
    white-space: nowrap;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      margin-right: 10px;
      margin-bottom: 10px;
      &.active {
        color: rgb(63, 167, 223);
      }
    }
    li:hover {
      color: rgb(63, 167, 223);
      cursor: pointer;
    }
  }
}
</style>
