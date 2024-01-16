<template>
  <view class="caption">
    <text class="text">猜你喜欢</text>
  </view>
  <view class="guess">
    <navigator
      class="guess-item"
      v-for="item in guessList"
      :key="item.id"
      :url="`/pages/goods/goods?id=4007498`"
    >
      <image class="image" mode="aspectFill" :src="item.picture"></image>
      <view class="name"> {{ item.name }} </view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>
    </navigator>
  </view>
  <view class="loading-text"> {{ finish ? '没有更多数据~' : '正在加载...' }} </view>
</template>

<script lang="ts" setup>
import { getHomeGoodsGuessLikeApi } from '@/services/home'
import type { PageParams } from '@/types/global'
import type { GuessItem } from '@/types/home'
import { onMounted, ref } from 'vue'

const guessList = ref<GuessItem[]>([])
const pageParams: Required<PageParams> = {
  page: 1,
  pageSize: 10,
}
// 加载结束标记
const finish = ref<boolean>(false)
const getHomeGoodsGuessLikeData = async () => {
  // 加载结束
  if (finish.value) {
    return uni.showToast({ icon: 'none', title: '没有更多数据~' })
  }
  const res = await getHomeGoodsGuessLikeApi(pageParams)
  guessList.value.push(...res.result.items)

  // 分页
  if (pageParams.page < res.result.pages) {
    pageParams.page++
  } else {
    finish.value = true
  }
}

// 重置数据
const resetData = () => {
  pageParams.page = 1
  guessList.value = []
  finish.value = false
}

// 组件挂载结束
onMounted(() => {
  getHomeGoodsGuessLikeData()
})

// 暴露给父组件
defineExpose({
  resetData,
  getMore: getHomeGoodsGuessLikeData,
})
</script>

<style lang="scss" scoped>
@import './styles/mpGuess.scss';
</style>
