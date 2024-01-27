<template>
  <div class="education" :style="{ color }">
    <div class="education__heading">
      <div class="education__title">{{ title }}</div>
      <div class="education__dates"><span>-</span> {{ dates }}</div>
    </div>
    <div class="education__place">{{ place }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: '',
      type: String,
    },
    dates: {
      default: '',
      type: String,
    },
    place: {
      default: '',
      type: String,
    },
    color: {
      default: '#fff',
      type: String,
    },
  },
}
</script>

<style scoped lang="scss">
@import 'Education';
</style>
