<template>
      <!-- Contenedor relativo para posicionamiento absoluto -->
      <!-- Tarjeta con efectos avanzados -->
      <div
        class="absolute w-[90%] aspect-[10/8] rotate-6 transform-gpu bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl shadow-[0_0_60px_-15px_rgba(124,58,237,0.6)] border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:rotate-3 hover:shadow-[0_0_80px_-10px_rgba(99,102,241,0.8)]"
        :class="{
          '!rotate-3 shadow-[0_0_80px_-10px_rgba(99,102,241,0.8)]': animate.isHovered,
        }"
      >
        <!-- Efecto de luz interior -->
        <div
          class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"
        ></div>

        <!-- Borde luminoso -->
        <div
          class="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-transparent via-blue-400/40 to-purple-400/40 -z-10 mask"
        ></div>
      </div>
</template>


<script setup lang="ts">
import { watch, computed } from "vue";
import { useDeviceOrientation } from "@vueuse/core";
import { useAnimeteStore } from "@/stores/animateStore";

const orientation = useDeviceOrientation();
const animate = useAnimeteStore();

const isTouchDevice = computed(() => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    orientation.isSupported
  );
});

watch(
  () => animate.isHovered,
  () => {
    console.log(isTouchDevice.value, animate.isHovered);
  }
);
</script>