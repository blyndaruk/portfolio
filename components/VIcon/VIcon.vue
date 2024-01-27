<script setup>
import { defineAsyncComponent } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
  },
});

const icon = defineAsyncComponent(() => import(`../../icons/${props.name}.svg?component`));
</script>

<template>
  <component class="v-icon" :style="{ color: color }" :is="icon" />
</template>

<style lang="scss">
svg {
  display: block;
  width: 1em;
}
</style>
