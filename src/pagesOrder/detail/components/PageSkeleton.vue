<template name="skeleton">
  <view class="sk-container">
    <view class="navbar navbar" style="padding-top: 47px">
      <view class="wrap wrap">
        <navigator
          class="back icon-left sk-pseudo sk-pseudo-circle"
          open-type="navigateBack"
        ></navigator>
        <view class="title sk-transparent sk-text-14-2857-160 sk-text">订单详情</view>
      </view>
    </view>
    <scroll-view scroll-y="true" class="viewport viewport" id="scroller" enable-back-to-top="true">
      <view class="overview sk-image" style="padding-top: 67px">
        <view class="status sk-transparent sk-text-0-0000-291 sk-text">已取消</view>
        <view class="button-group button-group">
          <navigator
            class="button sk-transparent sk-text-28-1250-345 sk-text"
            hover-class="none"
            style="background-position-x: 50%"
          >
            再次购买
          </navigator>
        </view>
      </view>
      <view class="shipment shipment">
        <view class="locate sk-image">
          <view class="user sk-transparent sk-text-14-2857-469 sk-text">李四13577527899</view>
          <view class="address sk-transparent sk-text-14-2857-938 sk-text"
            >北京市 北京市 东城区123</view
          >
        </view>
      </view>
      <view class="goods goods">
        <view class="item item">
          <navigator class="navigator navigator" hover-class="none">
            <image class="cover sk-image"></image>
            <view class="meta meta">
              <view class="name ellipsis sk-transparent sk-text-14-2857-918 sk-text"
                >21秋季新品，棉毛布基础款哈衣59-90cm</view
              >
              <view class="type sk-transparent sk-text-22-2222-757 sk-text">小房子， 80cm</view>
              <view class="price price">
                <view class="actual actual">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="sk-transparent sk-text-14-2857-187 sk-text">52</text>
                </view>
              </view>
              <view class="quantity sk-transparent sk-text-14-2857-559 sk-text">x 1</view>
            </view>
          </navigator>
        </view>
        <view class="total total">
          <view class="row row">
            <view class="text sk-transparent sk-text-0-0000-655 sk-text">商品总价: </view>
            <view class="symbol sk-transparent sk-text-0-0000-80 sk-text sk-pseudo sk-pseudo-circle"
              >52</view
            >
          </view>
          <view class="row row">
            <view class="text sk-transparent sk-text-0-0000-753 sk-text">运费: </view>
            <view
              class="symbol sk-transparent sk-text-0-0000-549 sk-text sk-pseudo sk-pseudo-circle"
              >4</view
            >
          </view>
          <view class="row row">
            <view class="text sk-transparent sk-text-0-0000-986 sk-text">应付金额: </view>
            <view
              class="symbol primary sk-transparent sk-text-0-0000-140 sk-text sk-pseudo sk-pseudo-circle"
              >56</view
            >
          </view>
        </view>
      </view>
      <view class="detail detail">
        <view class="title sk-transparent sk-text-0-0000-270 sk-text">订单信息</view>
        <view class="row row">
          <view class="item sk-transparent">
            订单编号: 1753317573098737665
            <text class="copy sk-transparent sk-text-0-0000-956 sk-text">复制</text>
          </view>
          <view class="item sk-transparent sk-text-0-0000-710 sk-text"
            >下单时间: 2024-02-02 15:20:59</view
          >
        </view>
      </view>
      <view is="components/MpGuess" class="r r">
        <view class="caption MpGuess--caption data-v-3c82dc7e MpGuess--data-v-3c82dc7e">
          <text
            class="text MpGuess--text data-v-3c82dc7e MpGuess--data-v-3c82dc7e sk-transparent sk-text-0-0000-491 sk-text"
            >猜你喜欢</text
          >
        </view>
        <view class="guess MpGuess--guess data-v-3c82dc7e MpGuess--data-v-3c82dc7e">
          <navigator
            class="guess-item MpGuess--guess-item data-v-3c82dc7e MpGuess--data-v-3c82dc7e"
          >
            <image
              class="image MpGuess--image data-v-3c82dc7e MpGuess--data-v-3c82dc7e sk-image"
              mode="aspectFill"
            ></image>
            <view
              class="name MpGuess--name data-v-3c82dc7e MpGuess--data-v-3c82dc7e sk-transparent sk-text-14-2857-232 sk-text"
              >舒适透气，毛毛虫儿童网眼运动鞋26-35码</view
            >
          </navigator>
          <navigator
            class="guess-item MpGuess--guess-item data-v-3c82dc7e MpGuess--data-v-3c82dc7e"
          >
            <image
              class="image MpGuess--image data-v-3c82dc7e MpGuess--data-v-3c82dc7e sk-image"
              mode="aspectFill"
            ></image>
            <view
              class="name MpGuess--name data-v-3c82dc7e MpGuess--data-v-3c82dc7e sk-transparent sk-text-14-2857-766 sk-text"
              >治愈寒冬，儿童羊皮毛一体雪地靴26-35码</view
            >
          </navigator>
        </view>
      </view>
      <view class="toolbar toolbar" style="padding-bottom: 34px">
        <navigator
          class="button secondary sk-transparent sk-text-14-2857-146 sk-text"
          hover-class="none"
        >
          再次购买
        </navigator>
        <view class="button delete sk-transparent sk-text-14-2857-151 sk-text"> 删除订单 </view>
      </view>
    </scroll-view>
  </view>
</template>
<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-160 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-0-0000-291 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 36rpx;
  position: relative !important;
}
.sk-text-28-1250-345 {
  background-image: linear-gradient(
    transparent 28.125%,
    #eeeeee 0%,
    #eeeeee 71.875%,
    transparent 0%
  ) !important;
  background-size: 100% 64rpx;
  position: relative !important;
}
.sk-text-14-2857-469 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-938 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-918 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-22-2222-757 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 43.2rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-187 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-559 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: absolute !important;
}
.sk-text-0-0000-655 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-80 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-753 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-549 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-986 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-140 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 36rpx;
  position: relative !important;
}
.sk-text-0-0000-270 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 30rpx;
  position: relative !important;
}
.sk-text-0-0000-956 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 20rpx;
  position: relative !important;
}
.sk-text-0-0000-710 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-491 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 32rpx;
  position: relative !important;
}
.sk-text-14-2857-232 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-766 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-146 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-151 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
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
