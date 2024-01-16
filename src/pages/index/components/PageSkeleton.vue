<template name="skeleton">
  <view class="sk-container">
    <scroll-view :refresher-enabled="true" :scroll-y="true" class="scroll-view scroll-view">
      <view is="components/MpSwiper">
        <view class="carousel MpSwiper--carousel">
          <swiper
            :autoplay="false"
            :circular="true"
            indicator-active-color="#fff"
            indicator-color="rgba(255, 255, 255, 0.4)"
            :indicator-dots="true"
            :interval="3000"
            :current="0"
          ></swiper>
        </view>
      </view>
      <view is="pages/index/components/CategoryPanel">
        <view class="category CategoryPanel--category">
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-890 sk-text"
              >居家</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-483 sk-text"
              >锦鲤</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-235 sk-text"
              >服饰</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-386 sk-text"
              >母婴</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-781 sk-text"
              >个护</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-360 sk-text"
              >严选</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-411 sk-text"
              >数码</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-174 sk-text"
              >运动</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-768 sk-text"
              >杂项</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-874 sk-text"
              >品牌</text
            >
          </navigator>
        </view>
      </view>
      <view is="pages/index/components/HotPanel">
        <view
          class="panel HotPanel--panel hot HotPanel--hot data-v-df6c854a HotPanel--data-v-df6c854a"
        >
          <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
            <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
              <text
                class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-648 sk-text"
                >特惠推荐</text
              >
              <text
                class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-20 sk-text"
                >精选全攻略</text
              >
            </view>
            <navigator
              class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
              hover-class="none"
            >
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
            </navigator>
          </view>
          <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
            <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
              <text
                class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-296 sk-text"
                >爆款推荐</text
              >
              <text
                class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-775 sk-text"
                >最受欢迎</text
              >
            </view>
            <navigator
              class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
              hover-class="none"
            >
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
            </navigator>
          </view>
          <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
            <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
              <text
                class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-877 sk-text"
                >一站买全</text
              >
              <text
                class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-876 sk-text"
                >精心优选</text
              >
            </view>
            <navigator
              class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
              hover-class="none"
            >
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
            </navigator>
          </view>
          <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
            <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
              <text
                class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-115 sk-text"
                >新鲜好物</text
              >
              <text
                class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-241 sk-text"
                >生活加分项</text
              >
            </view>
            <navigator
              class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
              hover-class="none"
            >
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
            </navigator>
          </view>
        </view>
      </view>
      <view is="components/MpGuess" class="r r">
        <view class="caption MpGuess--caption data-v-3c82dc7e MpGuess--data-v-3c82dc7e">
          <text
            class="text MpGuess--text data-v-3c82dc7e MpGuess--data-v-3c82dc7e sk-transparent sk-text-0-0000-182 sk-text"
            >猜你喜欢</text
          >
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
// H5、App端默认开启scoped样式隔离，导致组件基础样式无效
/* #ifdef H5 || APP-PLUS */
@import '../styles/categoryPanel.scss';
@import '../styles/hotPanel.scss';
@import '@/components/styles/mpGuess.scss';
@import '@/components/styles/mpSwiper.scss';
/* #endif */

.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-543 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-689 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text-14-2857-890 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-483 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-235 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-386 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-781 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-360 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-411 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-174 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-768 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-874 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-648 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-20 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-296 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-775 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-877 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-876 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-115 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-241 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-0-0000-182 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 32rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
