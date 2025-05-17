<template>
  <div ref="vantaRef" class="vanta-background">
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/stores/themeStore";
import { onMounted, onUnmounted, ref, watch } from 'vue'
import * as THREE from 'three'
import BIRDS from 'vanta/dist/vanta.birds.min'

const themeStore = useThemeStore();
const vantaRef = ref<HTMLDivElement | null>(null)
let vantaEffect: any = null


// Función para normalizar valores RGB (con o sin comas)
const normalizeRGB = (rgbString: string, fallback: string = "0 0 0") => {
  if (!rgbString) return fallback;

  // Eliminar todas las comas y espacios múltiples
  const normalized = rgbString.replace(/,/g, "").replace(/\s+/g, " ").trim();
  return normalized || fallback;
};

// Función para convertir a THREE.Color
const cssRGBToThreeColor = (rgbString: string, fallback: string = "0 0 0") => {
  const normalizedRGB = normalizeRGB(rgbString, fallback);
  const [r, g, b] = normalizedRGB.split(" ").map(Number);

  // Validar valores RGB
  if ([r, g, b].some(isNaN)) {
    console.warn(`Invalid RGB value: ${rgbString}, using fallback`);
    return new THREE.Color(...fallback.split(" ").map(Number));
  }

  return new THREE.Color(r / 255, g / 255, b / 255);
};

// Función para inicializar/actualizar Vanta
const initVanta = () => {
  if (!vantaRef.value) return;

  const rootStyles = getComputedStyle(document.documentElement);

  // Destruir efecto anterior si existe
  if (vantaEffect) vantaEffect.destroy();

  // Configuración basada en el tema
  const primaryColor = rootStyles.getPropertyValue("--color-primary").trim();
  const bgColor = rootStyles.getPropertyValue("--color-bg").trim();
  const bgColorMuted = rootStyles.getPropertyValue("--color-bg-muted").trim();

  vantaEffect = BIRDS({
    el: vantaRef.value,
    THREE: THREE,
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    colorMode: "lerp",
    backgroundAlpha: 1,
    wingSpan: 1,
    quantity: 3,
    birdSize: 2,
    backgroundColor: cssRGBToThreeColor(bgColor),
    color1: cssRGBToThreeColor(primaryColor),
    color2: cssRGBToThreeColor(bgColorMuted),
    scale: 1.0,
    scaleMobile: 1.0,
  });
};

// Observar cambios en el tema
watch(
  () => themeStore.isDark,
  () => {
    initVanta();
  }
);

// Inicializar al montar y limpiar al desmontar
onMounted(initVanta);
onUnmounted(() => {
  vantaEffect?.destroy();
});
</script>

<style scoped>
.vanta-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  z-index: -1;
  overflow: hidden;
}
</style>
