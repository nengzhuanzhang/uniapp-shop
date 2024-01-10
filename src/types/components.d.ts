import MpSwiper from '@/components/MpSwiper.vue'

declare module 'vue' {
  export interface GlobalComponents {
    MpSwiper: typeof MpSwiper
  }
}
