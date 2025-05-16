<template>
  <div
    id="welcome"
    class="text-3xl md:text-4xl font-extrabold text-center leading-8 md:leading-10"
  >
    <!-- Contenido-->
    <div
      class="apsolute transform-gpu w-[400px] h-[300px] flex flex-col items-center justify-center p-8 text-center z-20"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <networks />
      <hello-world />
    </div>
    <div class="absolute min-h-screen">
      <!-- Contenedor relativo para posicionamiento absoluto -->
      <!-- Tarjeta con efectos avanzados -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] md:w-[500px] md:h-[400px] rotate-6 transform-gpu bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl shadow-[0_0_60px_-15px_rgba(124,58,237,0.6)] border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:rotate-3 hover:shadow-[0_0_80px_-10px_rgba(99,102,241,0.8)]"
        :class="{'!rotate-3 shadow-[0_0_80px_-10px_rgba(99,102,241,0.8)]': isHovered}"
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Networks from "@/components/Networks.vue";
import HelloWorld from "@/components/Welcome.vue";

const isHovered = ref(false);
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
