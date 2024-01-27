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
          perc: '95',
        },
        {
          name: 'CSS',
          perc: '90',
        },
        {
          name: 'SCSS',
          perc: '90',
        },
        {
          name: 'JS',
          perc: '80',
        },
        {
          name: 'React',
          perc: '76',
        },
        {
          name: 'Next.js',
          perc: '72',
        },
        {
          name: 'Vue',
          perc: '65',
        },
        {
          name: 'Nuxt',
          perc: '45',
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
          name: 'Webpack',
          perc: '55',
        },
        {
          name: 'Optimize',
          perc: '75',
        },
        {
          name: 'Animate',
          perc: '70',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import 'Skills';
</style>
