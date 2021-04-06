<template>
  <div class="v-icon" :style="{ color: color }" v-html="src"></div>
</template>

<script>
export default {
  props: {
    name: {
      default: '',
      type: String,
    },
    color: {
      default: '',
      type: String,
    },
  },
  computed: {
    src() {
      return require(`assets/icons/${this.name}.svg?raw`)
    },
  },
}
</script>

<style lang="scss">
svg {
  display: block;
  width: 1em;
}
</style>
