<template>
  <!-- navbar -->
  <CustomNavbar />
  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    @scrolltolower="onScrolltolower"
    :refresher-triggered="isTriggered"
    class="scroll-view"
    scroll-y
  >
    <!-- 骨架屏 -->
    <PageSkeleton v-if="isLoading"></PageSkeleton>

    <template>
      <!-- swiper -->
      <MpSwiper :list="bannerList" />
      <!-- categoryPanel -->
      <CategoryPanel :list="categoryList"></CategoryPanel>
      <!-- hotPanel -->
      <HotPanel :list="hotList"></HotPanel>
      <!-- guess -->
      <MpGuess ref="guessRef"></MpGuess>
    </template>
  </scroll-view>
</template>

<script setup lang="ts">
import { getHomeBannerApi, getHomeCategoryApi, getHomeHotApi } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import HotPanel from './components/HotPanel.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import type { MpGuessInstance } from '@/types/components'

// 获取banner数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerApi()
  bannerList.value = res.result
}

// 获取首页 分类 数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryApi()
  categoryList.value = res.result
}

// 获取首页 热门推荐
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotApi()
  hotList.value = res.result
}

// 滚动到底部
const guessRef = ref<MpGuessInstance>()
const onScrolltolower = () => {
  guessRef.value?.getMore()
}

// 设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发
const isTriggered = ref<boolean>(false)
// 下拉刷新
const onRefresherrefresh = async () => {
  isTriggered.value = true
  guessRef.value?.resetData()
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.getMore(),
  ])
  isTriggered.value = false
}

// 页面加载
const isLoading = ref<boolean>(false)
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})
</script>

<style lang="scss">
page {
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  height: 100%;
}

.scroll-view {
  flex: 1;
  overflow: hidden;
}
</style>
