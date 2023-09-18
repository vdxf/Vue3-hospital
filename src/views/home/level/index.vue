<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级：</div>
      <ul class="hospital">
        <li :class="{ active: activeFlag === '' }" @click="handleRemove">全部</li>
        <li
          v-for="level in levelArr"
          :key="level.value"
          @click="handleChnageLevel(level.value)"
          :class="{ active: activeFlag === level.value }"
        >
          {{ level.name }}
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
  getLevel()
})
const levelArr = ref<HospitalLevelAndRegionArr>([])
const getLevel = async () => {
  const res: HospitalLevelAndRegionResponse = await reqLevelAndRegion('HosType')
  if (res.code === 200) {
    levelArr.value = res.data
  }
}
const activeFlag = ref<string>('')
const emit = defineEmits(['getLevel'])
const handleChnageLevel = (level: string) => {
  activeFlag.value = level
  emit('getLevel', level)
}
const handleRemove = () => {
  activeFlag.value = ''
  emit('getLevel', '')
}
</script>
<style lang="scss" scoped>
.level {
  color: #666;
  h1 {
    font-weight: 900;
    margin-bottom: 10px;
  }
}
.content {
  display: flex;
  .left {
    margin-right: 10px;
  }
  .hospital {
    display: flex;
    li {
      margin-right: 10px;
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
