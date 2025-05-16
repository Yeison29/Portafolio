<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted, watchEffect } from 'vue';
import { useThemeStore } from '@/stores/themeStore';
import { useI18n } from 'vue-i18n';
import { useLocaleStore } from '@/stores/localeStore';

const themeStore = useThemeStore();
const { locale } = useI18n();
const langStore = useLocaleStore();

onMounted(() => {
  themeStore.initTheme();
  langStore.initLang();
});

watchEffect(() => {
  locale.value = langStore.lang;
  console.log('Idioma cambiado a:', locale.value);
});
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>