<template>
  <div class="box">
    <div class="box__inner">
      <div class="box__doc">
        <div class="box__top">
          <div>{{ title }}</div>
          <slot></slot>
        </div>
        <div class="box__bottom">
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
