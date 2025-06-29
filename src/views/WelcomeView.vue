<template>
  <div
    id="welcome"
    class="relative w-full h-screen text-2xl md:text-3xl font-extrabold text-center leading-10 md:leading-10"
  >
    <!-- Contenido-->
    <div
      class="transform-gpu w-[340px] h-[240px] md:w-[500px] md:h-[400px] flex flex-col items-center justify-center p-8 text-center z-20"
      @mouseenter="isTouchDevice !== true ? (animate.isHovered = true) : null"
      @mouseleave="isTouchDevice !== true ? (animate.isHovered = false) : null"
    >
      <networks />
      <welcome />
    </div>
    <target />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useDeviceOrientation } from "@vueuse/core";
import Networks from "@/components/Networks.vue";
import Welcome from "@/components/Welcome.vue";
import { useDelayedShow } from "@/utils/delayedShow";
import { useAnimeteStore } from "@/stores/animateStore";
import target from "@/components/target.vue";

const delayedButton = useDelayedShow(3500);
const orientation = useDeviceOrientation();
const animate = useAnimeteStore();

onMounted(() => {
  delayedButton.showAfterDelay();
});

const isTouchDevice = computed(() => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    orientation.isSupported
  );
});
</script>

<style scoped>
#welcome {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
