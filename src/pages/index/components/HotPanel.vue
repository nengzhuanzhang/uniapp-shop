<template>
  <view class="panel hot">
    <view class="item" v-for="item in list" :key="item.id">
      <view class="title">
        <text class="title-text">{{ item.title }}</text>
        <text class="title-desc">{{ item.alt }}</text>
      </view>
      <navigator class="cards" url="/pages/hot/hot" hover-class="none">
        <image
          v-for="src in item.pictures"
          :key="src"
          class="image"
          mode="aspectFit"
          :src="src"
        ></image>
      </navigator>
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { HotItem } from '@/types/home'

defineProps<{ list: HotItem[] }>()
</script>

<style lang="scss" scoped>
@import '../styles/hotPanel.scss';
</style>
