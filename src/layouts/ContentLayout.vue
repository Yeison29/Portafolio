<template>
  <div id="content-layout">
    <!-- <Nav ref="navRef" class="nav-container" /> -->
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
/* import Nav from "@/components/nav.vue"; */
import type { ComponentPublicInstance } from "vue";

const navRef = ref<ComponentPublicInstance | null>(null);

const animateNav = () => {
  if (!navRef.value) return;
  // Configuración inicial: Ocultar elementos antes de animar
  gsap.set(navRef.value.$el, { clearProps: "all" });
  gsap.set(navRef.value.$el, {
    x: -100,
    opacity: 0,
    willChange: "transform, opacity",
  });
  gsap.set(navRef.value.$el.querySelectorAll(".button"), { y: 20, opacity: 0 });

  // Timeline para controlar la secuencia
  const tl = gsap.timeline({
    defaults: { ease: "power3.out", duration: 0.6 },
  });

  // Animación del contenedor nav
  tl.to(navRef.value.$el, {
    x: 0,
    opacity: 1,
    duration: 1,
    onComplete: () => {
      // Opcional: Restaurar clases necesarias después de animar
      if (navRef.value && navRef.value.$el) {
        navRef.value.$el.classList.add("fixed", "left-0");
      }
    },
  });

  // Animación escalonada de los botones
  tl.to(
    navRef.value.$el.querySelectorAll(".button"),
    {
      y: 0,
      opacity: 1,
      stagger: 0.15, // Retardo entre cada botón
      duration: 0.8,
      ease: "back.out(1.7)", // Efecto con pequeño rebote
    },
    "-=0.8"
  ); // Se solapa con la animación anterior
};

onMounted(() => {
  animateNav();
});
</script>

<style scoped>
#content-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.nav-container {
  will-change: transform; /* Optimización para animaciones */
  position: fixed; /* Necesario para transformaciones */
  left: 0;
  top: 50%; /* Centrado vertical */
  transform: translateY(-50%); /* Ajuste preciso */
}
</style>
