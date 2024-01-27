<template>
  <div class="box">
    <div class="box__inner">
      <div class="box__doc">
        <div class="box__content">
          <slot></slot>
        </div>
        <div class="box__back">
          <VButton url="/" text="Home" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
