import { ref } from 'vue'

export function useDelayedShow(delayMs: number) {
  const isVisible = ref(false)
  
  const showAfterDelay = () => {
    setTimeout(() => {
      isVisible.value = true
      console.log('Element is now visible')
    }, delayMs)
  }

  return { isVisible, showAfterDelay }
}