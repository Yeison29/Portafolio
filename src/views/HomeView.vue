<template>
  <div
    id="welcome"
    class="grid w-full pt-25 h-full grid-rows-[auto_1fr] grid-cols-1 md:grid-cols-2 place-items-center"
  >
    <div
      class="flex flex-col justify-between pb-[5%] px-5 md:px-20 w-full h-full order-2 md:order-1"
    >
      <div>
        <h1>
          <TypeWriter
            :key="`welcome-${refreshKey}`"
            :texts="[
              `${t(
                'welcomeHome'
              )}<span class='inline-block h-2 md:h-3 w-2 md:w-3 ml-1 rounded-full bg-[rgb(var(--color-primary))]'></span>`,
            ]"
            :speed="90"
          />
        </h1>
        <h1>
          <TypeWriter
            :key="`welcome-${refreshKey}`"
            :texts="[`${t('name')}`]"
            :speed="90"
            :delay="700"
          />
        </h1>
        <h1>
          <TypeWriter
            :key="`welcome-${refreshKey}`"
            :texts="[`${t('profession')}`, 'Full-Stack Developer']"
            :speed="90"
            :delay="2000"
            :loop="true"
            :deleteSpeed="90"
            :deleteDelay="5000"
            :loopDelay="5000"
            class="gradient-text"
          />
          <span
            ref="blinkingBar"
            class="inline-block h-6 md:h-10 w-1 ml-2 bg-[rgb(var(--color-primary))] origin-center rotate-10"
          ></span>
        </h1>
      </div>
      <div class="relative flex flex-col justify-end w-full h-[60px]">
        <div
          class="absolute w-[120px] right-0 md:right-auto md:right-0"
        >
          <networks />
        </div>
      </div>
    </div>
    <div
      class="relative max-w-[400px] md:max-w-[90%] flex items-center flex-col justify-between transform-gpu order-1 md:order-2"
      @mouseenter="isTouchDevice !== true ? (animate.isHovered = true) : null"
      @mouseleave="isTouchDevice !== true ? (animate.isHovered = false) : null"
    >
      <div class="z-20 w-[60%] h-auto mt-[-5%] overflow-hidden rotate-6">
        <img
          :src="urlDeveloper"
          alt="Developer Image"
          class="w-[100%] h-auto -rotate-6 [mask-image:linear-gradient(to_top,transparent_0%,transparent_10%,black_40%,black_100%)] [-webkit-mask-image:linear-gradient(to_top,transparent_0%,transparent_10%,black_40%,black_100%)]"
        />
      </div>
      <target />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, ref, computed } from "vue";
import { useRouterStore } from "@/stores/routerStore";
import { useI18n } from "vue-i18n";
import type { MessageSchema } from "@/interfaces/i18n";
import TypeWriter from "@/components/TypeWriter.vue";
import { useLocaleStore } from "@/stores/localeStore";
import { gsap } from "gsap";
import target from "@/components/target.vue";
import Networks from "@/components/Networks.vue";
import { useAnimeteStore } from "@/stores/animateStore";
import { useDeviceOrientation } from "@vueuse/core";

const routeStore = useRouterStore();
const localeStore = useLocaleStore();
const blinkingBar = ref(null);
const orientation = useDeviceOrientation();
const animate = useAnimeteStore();

const { t } = useI18n<{ message: MessageSchema }>();
const urlDeveloper = new URL("@/assets/img/developer.png", import.meta.url)
  .href;

onMounted(() => {
  routeStore.setWelcomePage(false);
  animateBlinkingBar();
});

const refreshKey = ref(true);

watch(
  () => localeStore.lang,
  () => {
    refreshKey.value = !refreshKey.value;
  }
);

const animateBlinkingBar = () => {
  gsap.to(blinkingBar.value, {
    opacity: 0,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });
};

const isTouchDevice = computed(() => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    orientation.isSupported
  );
});
</script>

<style scoped>
h1 {
  font-size: 2rem;
  font-family: "Segoe UI", system-ui, sans-serif;
  font-weight: 800; /* Negro (900 sería extra-negro) */
  line-height: 1.2; /* Interlineado ajustado (valor recomendado para negritas) */
  letter-spacing: -0.02em; /* Compactado ligeramente */
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 1.5rem;
  }
}
</style>
