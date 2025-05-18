<template>
    <div id="app-layout">
        <vanta-background />
        <toggle-lang-theme />
        <router-view />
    </div>
</template>

<script setup lang="ts">
import toggleLangTheme from "@/components/toggleLangTheme.vue";
import VantaBackground from "@/components/VantaBackground.vue";
</script>

<style scoped>
#app-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>