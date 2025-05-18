import type { Directive } from 'vue'

export const delayShow: Directive = {
  mounted(el, binding) {
    setTimeout(() => {
      el.style.visibility = 'visible'
      el.style.opacity = '1'
    }, binding.value || 0)
  },
  beforeMount(el) {
    el.style.visibility = 'hidden'
    el.style.opacity = '0'
    el.style.transition = 'opacity 0.5s ease'
  }
}