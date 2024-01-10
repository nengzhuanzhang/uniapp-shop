<template>
  <!-- navbar -->
  <CustomNavbar />
  <!-- swiper -->
  <MpSwiper :list="bannerList" />
</template>

<script setup lang="ts">
import { getHomeBannerApi } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'

// 获取banner数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerApi()
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<style lang="scss">
//
</style>
