import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  runtimeConfig: {
    BASE_URL: process.env.baseUrl || 'http://localhost:3000',
    public: {},
  },
  vue: {
    propsDestructure: true,
  },
  nitro: {},
  postcss: {},
  // plugins: [vue(), svgLoader()],
  vite: {
    plugins: [
      svgLoader({
        defaultImport: 'url',
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "~/assets/styles/helpers/_helpers.scss" as *;@use "~/assets/styles/variables/index.scss" as *;',
        },
      },
    },
  },
  webpack: {},
  // modules: ['nuxt-svgo'],
  css: ['~/assets/styles/index.scss'],
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    // pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Valice',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'ValiceLab is a web & mobile app development company. ' +
            'We build for the Web with HTML/CSS, JavaScript, PHP and Agile, ' +
            'providing UI/UX design and convenient website admin features. ' +
            'We work closely with you to design ' +
            'and build your digital products. Request a proposal!',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'ValiceLab is a web & mobile app development company. ' +
            'We build for the Web with HTML/CSS, JavaScript, PHP and Agile, ' +
            'providing UI/UX design and convenient website admin features. ' +
            'We work closely with you to design ' +
            'and build your digital products. Request a proposal!',
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'ValiceLab',
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: 'ValiceLab',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'ValiceLab - We develop and design Web & mobile apps',
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
        // {
        //   rel: 'preconnect',
        //   href: process.env.PUBLIC_SITE_URL,
        // },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Iceland&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,700;1,400;1,700&display=swap',
        },
      ],
    },
  },
});
