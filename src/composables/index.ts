import type { MpGuessInstance } from '@/types/components'
import { ref } from 'vue'

export const useGuessList = () => {
  // 获取猜你喜欢 组件 实例
  const guessRef = ref<MpGuessInstance>()
  // 滚动触底
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }

  // 返回 ref 和事件处理函数
  return {
    guessRef,
    onScrolltolower,
  }
}
