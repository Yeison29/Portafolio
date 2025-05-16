<template>
  <div
    id="welcome"
    class="text-3xl md:text-4xl font-extrabold text-center leading-8 md:leading-10"
  >
    <Networks />
    <TypeWriter
      :key="`welcome-${refreshKey}`"
      :text="t('welcome')"
      :speed="90"
      class="block"
    />
    <h1>
      <TypeWriter
        :key="`welcome2-${refreshKey}`"
        :text="`${t('welcome2')} `"
        :speed="90"
        :delay="1500"
        class="gradient-text"
      />
      <TypeWriter
        :key="`welcome3-${refreshKey}`"
        :text="t('welcome3')"
        :speed="90"
        :delay="2500"
        class="gradient-text"
      />
    </h1>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import type { MessageSchema } from "@/interfaces/i18n";
import { useLocaleStore } from "@/stores/localeStore";
import Networks from "@/components/Networks.vue";
import TypeWriter from "@/components/TypeWriter.vue";

const localeStore = useLocaleStore();

const { t } = useI18n<{ message: MessageSchema }>();
const refreshKey = ref(true);

watch(
  () => localeStore.lang,
  () => {
    refreshKey.value = !refreshKey.value;
  }
);
</script>

<style scoped>
#welcome {
  width: 100vw;
}
</style>
