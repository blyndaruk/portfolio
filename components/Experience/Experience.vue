<template>
  <div class="experience">
    <div class="experience__heading">
      <div class="experience__place">{{ place }}</div>
      <div class="experience__dates"><span>-</span> {{ dates }}</div>
    </div>
    <div class="experience__position">{{ position }}</div>
    <div class="experience__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    place: {
      default: '',
      type: String,
    },
    dates: {
      default: '',
      type: String,
    },
    position: {
      default: '',
      type: String,
    },
  },
}
</script>

<style scoped lang="scss">
@import 'Experience';
</style>
