<template>
  <div id="welcome-layout">
    <VantaBackground :is-dark-mode="themeStore.isDark" />
    <nav
      class="fixed top-0 right-0 flex items-center justify-between p-4 gap-3"
    >
      <button
        class="button button--primary group"
        @click="themeStore.toggleTheme"
        v-if="themeStore.isDark"
      >
        <Icon
          icon="line-md:moon-loop"
          width="30"
          height="30"
          class="text-[rgb(var(--color-text))] hover:transition-colors hover:duration-500 group-hover:text-[rgb(var(--color-primary))]"
        />
      </button>
      <button
        class="button button--primary group"
        @click="themeStore.toggleTheme"
        v-else
      >
        <Icon
          icon="line-md:sunny-twotone-loop"
          width="30"
          height="30"
          class="text-[rgb(var(--color-text))] hover:transition-colors hover:duration-500 group-hover:text-[rgb(var(--color-primary))]"
        />
      </button>
      <button
        class="button button--primary group w-2"
        @click="changeLang()"
      >
        <span
          class="text-[rgb(var(--color-text))] hover:transition-colors hover:duration-500 group-hover:text-[rgb(var(--color-primary))] uppercase"
        >
          {{  localeStore.lang }}
        </span>
      </button>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/stores/themeStore";
import { useLocaleStore } from "@/stores/localeStore";
import VantaBackground from "@/components/VantaBackground.vue";

const themeStore = useThemeStore();
const localeStore = useLocaleStore();

const changeLang = () => {
    let lang = 'en';
    if (localeStore.lang === "en") {
        lang = "es";
    }
  localeStore.changeLang(lang);
};
</script>

<style scoped></style>
