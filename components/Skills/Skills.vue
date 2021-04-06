<template>
  <div class="skills">
    <div v-for="skill in skills" :key="skill.name" class="skills__item">
      <div class="skills__col" :style="{ height: skill.perc + '%' }"></div>
      <div class="skills__name">{{ skill.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          name: 'HTML',
          perc: '80',
        },
        {
          name: 'CSS',
          perc: '70',
        },
        {
          name: 'SCSS',
          perc: '64',
        },
        {
          name: 'JS',
          perc: '55',
        },
        {
          name: 'PHP',
          perc: '46',
        },
        {
          name: 'Git',
          perc: '67',
        },
        {
          name: 'WP',
          perc: '53',
        },
        {
          name: 'React',
          perc: '35',
        },
        {
          name: 'Vue',
          perc: '65',
        },
        {
          name: 'Nuxt',
          perc: '35',
        },
        {
          name: 'Webpack',
          perc: '35',
        },
        {
          name: 'Optimization',
          perc: '75',
        },
        {
          name: 'Animate',
          perc: '70',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
@import 'Skills';
</style>
