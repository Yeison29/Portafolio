<template>
  <div :ref="el => { tooltipRef = el as HTMLElement }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import tippy, { type Instance, type Props } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

const props = defineProps({
  content: {
    type: String,
    required: true
  },
  placement: {
    type: String as () => Props['placement'],
    default: 'top'
  },
  interactive: {
    type: Boolean,
    default: true
  }
});

const tooltipRef = ref<HTMLElement | null>(null);
let tippyInstance: Instance | null = null;

onMounted(() => {
  if (tooltipRef.value) {
    tippyInstance = tippy(tooltipRef.value, {
      content: props.content,
      placement: props.placement,
      theme: 'custom',
      arrow: true,
      duration: [100, 200],
      interactive: props.interactive,
      animation: 'scale',
      touch: false,
    });
  }
});

onBeforeUnmount(() => {
  tippyInstance?.destroy();
});

// Actualiza el contenido si cambia
watch(() => props.content, (newContent) => {
  if (tippyInstance) {
    tippyInstance.setContent(newContent);
  }
});
</script>