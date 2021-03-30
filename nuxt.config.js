export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NDark Agency',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'NDark Agency is a web & mobile app development company. ' +
          'We build for the Web with HTML/CSS, JavaScript, PHP and Agile, ' +
          'providing UI/UX design and convenient website admin features. ' +
          'We work closely with you to design ' +
          'and build your digital products. Request a proposal!',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'NDark Agency is a web & mobile app development company. ' +
          'We build for the Web with HTML/CSS, JavaScript, PHP and Agile, ' +
          'providing UI/UX design and convenient website admin features. ' +
          'We work closely with you to design ' +
          'and build your digital products. Request a proposal!',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'NDark Agency',
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'NDark Agency',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'NDark Agency - We develop and design Web & mobile apps',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.PUBLIC_SITE_URL}/ndark-og.png`,
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: `${process.env.PUBLIC_SITE_URL}/ndark-og.png`,
      },
      {
        rel: 'preconnect',
        href: process.env.PUBLIC_SITE_URL,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  env: {
    BASE_URL: process.env.baseUrl || 'http://localhost:3000',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-mq',
  ],

  mq: {
    defaultBreakpoint: 'sm',
    breakpoints: {
      sm: 599,
      md: 1024,
      lg: Infinity,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
    icon: {
      sizes: [16, 32, 64, 120, 144, 152, 192, 384, 512],
    },
  },

  target: 'static',

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    hotMiddleware: {
      client: {
        // Silence! console messages
        quiet: true,
      },
    },
  },
}
