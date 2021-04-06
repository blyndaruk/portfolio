<template>
  <div class="icon-heading">
    <div class="icon-heading__icon" :style="{ backgroundColor: bgColor }">
      <VIcon :color="iconColor" :name="iconName" />
    </div>
    <div class="icon-heading__title">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iconName: {
      default: '',
      type: String,
    },
    title: {
      default: '',
      type: String,
    },
    bgColor: {
      default: '',
      type: String,
    },
    iconColor: {
      default: '',
      type: String,
    },
  },
}
</script>

<style lang="scss">
.icon-heading {
  display: flex;
  align-items: center;
  font-family: 'Iceland', cursive;
  text-transform: uppercase;
  color: #c8bcb7;

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    margin-right: 20px;
    border-radius: 50%;
    color: #fff;
  }
}
</style>
