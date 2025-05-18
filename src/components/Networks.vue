<template>
  <div id="networks">
    <tooltip
      class="group"
      v-for="(network, index) in arraySocialNetworks"
      :key="index"
      @click="openInNewTab(network.url)"
      :content="network.name"
      placement="top"
    >
      <button class="button button--primary">
        <Icon
          :icon="network.icon"
          width="30"
          height="30"
          class="text-[rgb(var(--color-text))] hover:transition-colors hover:duration-500 group-hover:text-[rgb(var(--color-primary))]"
        />
      </button>
    </tooltip>
  </div>
</template>

<script setup lang="ts">
import Tooltip from "@/components/tooltip.vue";
import type { SocialNetwork } from "@/interfaces/socialNetworks";
import socialNetworks from "@/assets/data/socialNetworks.json";

const arraySocialNetworks: SocialNetwork[] = socialNetworks as SocialNetwork[];

const openInNewTab = (url: string): void => {
  window.open(url, "_blank", "noopener,noreferrer");
};
</script>

<style scoped>
#networks {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 1rem;
}

.button {
  height: 30px;
  width: 30px;
}
</style>
