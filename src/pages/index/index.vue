<template>
  <!-- navbar -->
  <CustomNavbar />
  <!-- swiper -->
  <MpSwiper :list="bannerList" />
  <!-- categoryPanel -->
  <CategoryPanel :list="categoryList"></CategoryPanel>
</template>

<script setup lang="ts">
import { getHomeBannerApi, getHomeCategoryApi } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/categoryPanel.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem } from '@/types/home'

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

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
})
</script>

<style lang="scss">
//
</style>
