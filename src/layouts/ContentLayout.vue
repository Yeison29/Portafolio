<template>
  <div id="content-layout">
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

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
