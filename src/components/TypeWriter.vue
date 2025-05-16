<template>
  <span ref="elementRef"></span>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import TypeIt from 'typeit'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  speed: {
    type: Number,
    default: 80
  },
  delay: {
    type: Number,
    default: 0
  }
})

const elementRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!elementRef.value) return
  
  new TypeIt(elementRef.value, {
    strings: props.text,
    speed: props.speed,
    startDelay: props.delay,
    cursor: false // Ocultamos el cursor para que coincida el diseño
  }).go()
})
</script>
