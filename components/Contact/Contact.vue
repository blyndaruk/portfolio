<template>
  <div class="contact">
    <a :href="url" :target="target ? '_blank' : false">{{ title }}</a>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      default: '',
      type: String,
    },
    title: {
      default: '',
      type: String,
    },
    target: {
      default: false,
      type: Boolean,
    },
  },
}
</script>

<style scoped lang="scss">
@import 'Contact';
</style>
