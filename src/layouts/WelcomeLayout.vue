<template>
  <div
    ref="touchContainer"
    id="welcome-layout"
    @wheel="handleWheel"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
    <div ref="content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import gsap from "gsap";

const router = useRouter();

const attempted = ref(false);
const touchContainer = ref<HTMLElement | null>(null);
const ROTATION_SENSITIVITY = 0.3;
const content = ref<HTMLElement | null>(null);
const rotation = ref(0);
const startY = ref(0);
const currentY = ref(0);
const isDragging = ref(false);

// Tamaño inicial
const viewportHeight = ref<number>(window.innerHeight);

const handleWheel = (event: WheelEvent) => {
  if (!attempted.value && event.deltaY > 0) {
    pushRoute();
  }
};

const pushRoute = () => {
  if (attempted.value) return;
  attempted.value = true;
  const val = viewportHeight.value*-1;
  gsap.to(content.value, {
    y: val,
    rotation: val,
    duration: 0.5,
  });

  setTimeout(() => {
    router.push({
      name: "home",
    });
  }, 500); // Deshabilitar el evento durante 0.5 segundo
};

// Configuración
const onTouchStart = (e: TouchEvent) => {
  isDragging.value = true;
  startY.value = e.touches[0].clientY;
  currentY.value = startY.value;
  gsap.killTweensOf(content.value); // Detener animaciones anteriores
};

const onTouchMove = (e: TouchEvent) => {
  if (!isDragging.value) return;

  const previousY = currentY.value;
  currentY.value = e.touches[0].clientY;
  const deltaY = currentY.value - previousY;

  if (deltaY > 0 && rotation.value > 0) return;
  e.preventDefault();

  rotation.value += deltaY * ROTATION_SENSITIVITY;

  // Uso correcto de GSAP
  gsap.to(content.value, {
    y: rotation.value, // Ajustar la posición Y
    rotation: rotation.value,
    duration: 0.1,
    ease: "none",
  });
};

const onTouchEnd = () => {
  isDragging.value = false;
  if (rotation.value < -40) {
    pushRoute();
    return;
  }

  // Animación de rebote con GSAP
  gsap.to(content.value, {
    y: 0,
    rotation: 0,
    duration: 1,
    ease: "elastic.out(1, 0.5)",
    onUpdate: () => {
      if (content.value) {
        rotation.value = gsap.getProperty(content.value, "rotation") as number;
      }
    },
  });
};

// Actualizar cuando cambia el tamaño
const updateViewportSizeHeight = () => {
  viewportHeight.value = window.innerHeight;
};


onMounted(() => {
  gsap.set(content.value, { rotation: 0 }); // Inicialización con GSAP
  window.addEventListener('resize', updateViewportSizeHeight);
});

onUnmounted(() => {
  gsap.killTweensOf(content.value); // Limpieza
  window.removeEventListener('resize', updateViewportSizeHeight);
});
</script>

<style scoped>
#welcome-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>
