<template>
    <button class="buttom button--primary" @click="handleClick">ingresar</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const handleClick = () => {
    router.push({ name: 'home' });
};
</script>