<template>
  <div class="container">
    <Smoke />
    <div class="app">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import debounce from 'debounce'
export default {
  data() {
    return {
      onResizeDebounced: debounce(this.onResize, 800),
    }
  },
  mounted() {
    this.updateHeight()
    window.addEventListener('resize', this.onResizeDebounced)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResizeDebounced)
  },
  methods: {
    onResize() {
      this.updateHeight()
    },
    updateHeight() {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    },
  },
}
</script>

<style lang="scss">
html {
  font-family: 'Raleway', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.app {
  position: relative;
  min-height: 100vh;
  width: 100%;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
