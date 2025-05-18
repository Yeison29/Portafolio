<template>
    <h1>Hello View</h1>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouterStore } from '@/stores/routerStore';

const routeStore = useRouterStore();

onMounted(() => {
    routeStore.setWelcomePage(false);
});
</script>

<style scoped></style>