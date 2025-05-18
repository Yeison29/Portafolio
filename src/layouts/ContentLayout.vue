<template>
  <div id="content-layout">
    <Nav />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Nav from "@/components/nav.vue";
</script>

<style scoped>
#content-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
