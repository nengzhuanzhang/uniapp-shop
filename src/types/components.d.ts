import MpSwiper from '@/components/MpSwiper.vue'
import MpGuess from '@/components/MpGuess.vue'

declare module 'vue' {
  export interface GlobalComponents {
    MpSwiper: typeof MpSwiper
    MpGuess: typeof MpGuess
  }
}

export type MpGuessInstance = InstanceType<typeof MpGuess>
