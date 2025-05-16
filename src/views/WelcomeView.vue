<template>
  <div id="welcome">
    <hello-world />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/Welcome.vue";
</script>

<style scoped>
#welcome {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>

