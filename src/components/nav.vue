<template>
  <nav
    id="nav"
    class="absolute transition-all duration-500 left-0 h-10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-br-2xl rounded-tr-2xl shadow-[0_0_60px_-15px_rgba(124,58,237,0.6)] border border-white/10 backdrop-blur-sm overflow-hidden hover:shadow-[0_0_80px_-10px_rgba(99,102,241,0.8)]"
  >
    <button
      class="button button--primary group"
      v-for="(button, index) in arrayNav"
      :key="index"
    >
      <Icon
        :icon="button.icon"
        width="30"
        height="30"
        class="text-[rgb(var(--color-text))] hover:transition-colors hover:duration-500 group-hover:text-[rgb(var(--color-primary))]"
      />
    </button>
  </nav>
</template>

<script setup lang="ts">
import type { NavInterface } from "@/interfaces/nav.ts";
import nav from "@/assets/data/nav.json";

const arrayNav: NavInterface[] = nav as NavInterface[];
</script>

<style scoped>
#nav {
  width: auto;
  height: auto;
  top:  1/2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 50px 5px;
}
</style>
