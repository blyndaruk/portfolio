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
.button {
  display: inline-flex;

  a,
  button {
    position: relative;
    display: inline-flex;
    text-transform: uppercase;
    text-decoration: none;
    color: #07959c;
    font-weight: 600;
    font-size: 16px;
    background: transparent;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &::before,
    &::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      background: #07959c;
      transition: all 0.3s ease;
    }

    &::before {
      height: 50%;
      width: 2px;
    }

    &::after {
      width: 20%;
      height: 2px;
    }

    span {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      padding: 15px 30px;

      &::before,
      &::after {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        background: #07959c;
        transition: all 0.3s ease;
      }

      &::before {
        width: 2px;
        height: 50%;
      }

      &::after {
        width: 20%;
        height: 2px;
      }
    }

    &:hover {
      &::before {
        height: 100%;
      }

      &::after {
        width: 100%;
      }

      span {
        &::before {
          height: 100%;
        }

        &::after {
          width: 100%;
        }
      }
    }
  }
}
</style>
