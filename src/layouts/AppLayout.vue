<template>
    <div id="app-layout">
        <toggle-lang-theme />
        <router-view />
    </div>
</template>

<script setup lang="ts">
import toggleLangTheme from "@/components/toggleLangTheme.vue";
</script>

<style scoped>
#app-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>