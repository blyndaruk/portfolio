<template>
  <div class="button">
    <NuxtLink v-if="type === 'link'" :to="url"
      ><span>{{ text }}</span></NuxtLink
    >
    <button v-else>
      <span>{{ text }}</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'link',
    },
    url: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
@import 'VButton';
</style>
