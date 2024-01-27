<script setup lang="ts">
const props = defineProps({
  error: Object,
});
console.error(props.error);
</script>

<template>
  <div>
    <h1>{{ error?.statusCode }}</h1>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>
