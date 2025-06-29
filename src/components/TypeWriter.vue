<template>
  <span ref="elementRef"></span>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import TypeIt from "typeit";

const props = defineProps({
  texts: {
    type: Array as () => string[],
    required: true,
    validator: (value: string[]) => value.length > 0,
  },
  speed: {
    type: Number,
    default: 80,
  },
  delay: {
    type: Number,
    default: 0,
  },
  deleteSpeed: {
    type: Number,
    default: 40, // Más rápido que la velocidad de escritura
  },
  deleteDelay: {
    type: Number,
    default: 2000, // 2 segundos antes de borrar
  },
  loop: {
    type: Boolean,
    default: false,
  },
  loopDelay: {
    type: Number,
    default: 2000,
  },
});

const elementRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!elementRef.value) return;

  new TypeIt(elementRef.value, {
    strings: props.texts,
    speed: props.speed,
    startDelay: props.delay,
    nextStringDelay: props.deleteDelay, // Tiempo antes de borrar la palabra
    deleteSpeed: props.deleteSpeed,
    cursor: false, // Ocultamos el cursor para que coincida el diseño
    html: true, // Permite HTML en las cadenas
    loop: props.loop,
    loopDelay: props.loopDelay, // Tiempo de espera entre repeticiones
    breakLines: false, // Evita saltos de línea
    afterStep: function (instance: any) {
      // Fuerza borrado completo antes de pasar a la siguiente palabra
      if (instance.is("deleting") && !instance.isLast) {
        instance.queue = []; // Limpia la cola de animación
      }
    },
  }).go();
});
</script>
