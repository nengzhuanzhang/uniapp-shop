<template>
  <view class="carousel">
    <swiper
      :circular="true"
      :indicator-dots="true"
      indicator-color="rgba(255, 255, 255, 0.4)"
      indicator-active-color="#fff"
      :autoplay="true"
      :interval="3000"
    >
      <swiper-item v-for="item in list" :key="item.id">
        <navigator :url="item.hrefUrl" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup lang="ts">
import type { BannerItem } from '@/types/home'

const props = defineProps<{ list: BannerItem[] }>()
console.log(props)
</script>

<style lang="scss">
@import './styles/mpSwiper.scss';
</style>
