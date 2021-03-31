<template>
  <div class="home">
    <div>
      <div class="home__actions">
        <VButton :text="'Resume'" :url="'/resume'" />
        <VButton :text="'Contacts'" :url="'/contacts'" />
        <VButton :text="'Portfolio'" :url="'/portfolio'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
