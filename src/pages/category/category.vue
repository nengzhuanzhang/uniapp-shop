<template>
  <view class="viewport" v-if="isLoading">
    <!-- 搜索框 -->
    <view class="search">
      <view class="input">
        <text class="icon-search">女靴</text>
      </view>
    </view>
    <!-- 分类 -->
    <view class="categories">
      <!-- 左侧：一级分类 -->
      <scroll-view class="primary" scroll-y>
        <view
          v-for="(item, index) in categoryList"
          :key="item.id"
          class="item"
          :class="{ active: index === activeIndex }"
          @tap="activeIndex = index"
        >
          <text class="name"> {{ item.name }} </text>
        </view>
      </scroll-view>
      <!-- 右侧：二级分类 -->
      <scroll-view class="secondary" scroll-y>
        <!-- banner图 -->
        <MpSwiper class="banner" :list="bannerList" />
        <!-- 内容list -->
        <view class="panel" v-for="item in subCategoryList" :key="item.id">
          <view class="title">
            <text class="name">{{ item.name }}</text>
            <!-- <navigator class="more" hover-class="none">全部</navigator> -->
          </view>
          <view class="section">
            <navigator
              v-for="goods in item.goods"
              :key="goods.id"
              class="goods"
              hover-class="none"
              :url="`/pages/goods/goods?id=${goods.id}`"
            >
              <image class="image" :src="goods.picture"></image>
              <view class="name ellipsis">{{ goods.name }}</view>
              <view class="price">
                <text class="symbol">¥</text>
                <text class="number">{{ goods.price }}</text>
              </view>
            </navigator>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
  <PageSkeleton v-else></PageSkeleton>
</template>

<script lang="ts" setup>
import { getCategoryTopApi } from '@/services/category'
import { getHomeBannerApi } from '@/services/home'
import type { CategoryTopItem } from '@/types/category'
import type { BannerItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { computed } from 'vue'
import { ref } from 'vue'
import PageSkeleton from './components/PageSkeleton.vue'

// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getBannerData = async () => {
  const res = await getHomeBannerApi(2)
  bannerList.value = res.result
}

// 获取一级分类数据
const categoryList = ref<CategoryTopItem[]>([])
const getCategoryTopData = async () => {
  const res = await getCategoryTopApi()
  categoryList.value = res.result
}

// 高亮下标
const activeIndex = ref(0)

// 二级分类数据
const subCategoryList = computed(() => {
  return categoryList.value[activeIndex.value]?.children || []
})

// 加载完成标识
const isLoading = ref(false)

onLoad(async () => {
  await Promise.all([getBannerData(), getCategoryTopData()])
  isLoading.value = true
})
</script>

<style lang="scss" scoped>
@import './styles/category.scss';
</style>
