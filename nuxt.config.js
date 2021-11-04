const axios = require('axios');

module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'اوارا - جامع ترین وب سایت املاک بین المللی',
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      {
        name: 'keywords',
        content: 'RealEstate ,Turkey ,Smart, 3d home,website, ایوارا , خرید و فروش ملک , ترکیه , استانبول , ازمیر , ملک'
      },
      {name: 'description', hid: 'description', content: 'EvAra Life | Intelligent Real Estate Solution'},
      {name: 'Developer', content: 'NSD.org'},
      {name: 'Author', content: 'EvAra'},
      {
        hid: 'اوارا - خرید و فروش ملک در ترکیه',
        name: 'اوارا',
        content: ' خرید و فروش ملک در ترکیه '
      },

      /*<!-- -----------------  <- OPEN GRAPH SHARE TAGs -> ----------------- -->*/
      {property: 'og:locale', hid: 'og:locale', content: 'tr_TR'},
      {property: 'og:type', hid: 'og:type', content: 'website'},
      {property: 'og:title', hid: 'og:title', content: 'EvAra Life'},
      {property: 'og:description', hid: 'og:description', content: 'Intelligent Real Estate Solution'},
      {property: 'og:image', hid: 'og:image', content: 'https://www.evara.life/thumb/og_test.jpg'},
      {property: 'og:image:secure_url', hid: 'og:image:secure_url', content: 'https://www.evara.life/thumb/og_test.jpg'},
      {property: 'og:image:alt', hid: 'og:image:alt', content: 'Evara Life'},
      {property: 'og:url', hid: 'og:url', content: 'https://evara.life'},
      {property: 'og:site_name', hid: 'og:site_name', content: 'Evara Life'},

      /*<!-- ----------------- <- TWITTER CARD SHARE TAGs -> ----------------- -->*/
      // Test on: https://cards-dev.twitter.com/validator
      {name: 'twitter:card', hid: 'twitter:card', content: 'Evara'},
      {name: 'twitter:site', hid: 'twitter:site', content: '@Evara'},
      {name: 'twitter:title', hid: 'twitter:title', content: 'Evara'},
      {name: 'twitter:url', hid: 'twitter:url', content: 'https://www.evara.life'},
      {name: 'twitter:image', hid: 'twitter:image', content: 'https://www.evara.life/thumb/og_test.jpg'},
      {name: 'twitter:description', hid: 'twitter:description', content: 'EvAra Life | Intelligent Real Estate Solution'},
      {name: 'twitter:creator', content: '@evara.life'},

      {name: 'msapplication-TileColor', content: '#8cc63f'},
      {name: 'msapplication-TileImage', content: '/images/icons/mstile-144x144.png'},
      {name: 'theme-color', content: '#d7eeb8'},
      {name: 'mobile-web-app-capable', content: 'yes'},
      {name: 'apple-touch-fullscreen', content: 'yes'},
      {name: 'apple-mobile-web-app-capable', content: 'yes'},
      {name: 'apple-mobile-web-app-status-bar-style', content: 'default'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/images/icons/favicon.ico'},

      {rel: 'apple-touch-icon', type: 'image/x-icon', href: '/images/icons/apple-touch-icon.png'},
      {rel: 'icon', type: 'image/png', size: '32x32', href: '/images/icons/favicon-32x32.png'},
      {rel: 'icon', type: 'image/png', size: '194x194', href: '/images/icons/favicon-194x194.png'},
      {rel: 'icon', type: 'image/png', size: '16x16', href: '/images/icons/favicon-16x16.png'},

      // {rel: 'manifest', href: '/site.webmanifest'},
      {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5'},

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src: '~/assets/css/font.css', lang: 'css'},
    {src: '~/assets/fonts/fontawesome/css/all.css', lang: 'css'},
    'swiper/css/swiper.css', // swiper style
    'quill/dist/quill.core.css',
    'quill/dist/quill.snow.css', // for snow theme
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/bootstrap.js', ssr: false},
    {src: '~/plugins/axios.js', ssr: false},
    {src: '~/plugins/nuxt-swiper-plugin.js', mode: 'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // SET TARGET STATIC
  target: 'server',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-i18n',
    '@nuxtjs/universal-storage',
    "vue-toastification/nuxt",
    ['nuxt-lazy-load', {
      // These are the default values
      images: true,
      videos: true,
      audios: true,
      iframes: true,
      native: true,
      polyfill: true,
      directiveOnly: false,

      // Default image must be in the static folder
      defaultImage: '/images/loading.gif',

      // To remove class set value to false
      loadingClass: 'isLoading',
      loadedClass: 'isLoaded',
      appendClass: 'lazyLoad',

    }],
    '@nuxtjs/sitemap',
    '@nuxtjs/gtm',
    'vue-social-sharing/nuxt'
  ],

  //Google Tag Manager
  gtm: {
    id: 'GTM-WH6PJ9K'
  },

  googleAnalytics: {
    id: 'UA-187533819-1',
    autoTracking: {
      screenview: true,
      page: true
    }
  },

  // I18N: https://i18n.nuxtjs.org/setup
  i18n: {
    locales: [
      {code: 'en', iso: 'en', file: 'en.js', dir: 'ltr'},
      {code: 'fa', iso: 'fa', file: 'fa.js', dir: 'rtl'},
      {code: 'ar', iso: 'ar', file: 'ar.js', dir: 'rtl'},
      {code: 'ru', iso: 'ru', file: 'ru.js', dir: 'ltr'},
      {code: 'ch', iso: 'ch', file: 'ch.js', dir: 'ltr'},
      {code: 'tr', iso: 'tr', file: 'tr.js', dir: 'ltr'}
    ],
    seo: true,
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'fa'
  },

  // vue-toastification nuxt
  toast: {
    position: "bottom-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: true,
    hideProgressBar: false,
    closeButton: "button",
    rtl: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'http://evara.life:3088',
    baseURL: 'https://evara.life:3086',
  },

  //universal-storage
  storage: {},

  // Site Map
  sitemap: {
    hostname: 'https://evara.life',
    i18n: {
      locales: ['fa', 'en', 'ar', 'ru', 'ch', 'tr'],
      routesNameSeparator: '___'
    },

    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    },
    exclude: [
      '/**',
      '/index/**',
      '/index/plans/**',
      '/profile/**'
    ],
    sitemaps:[
      {
        path: '/sitemap-static.xml',
        routes: [
          {
            url: '/',
            changefreq: 'daily',
            priority: 1,
            lastmod: new Date()
          },
          {
            url: '/search',
            changefreq: 'daily',
            priority: 1,
            lastmod: new Date()
          },
          '/index',
          '/404',
          '/500',
          '/aboutus',
          '/contactus',
          '/detail/:project',
          '/edit',
          '/FAQ',
          '/new',
          '/plans',
          '/services',
          '/turkishcitizenship',
          '/turkishbuyhouse',
          '/turkishpassport',
          '/virtualtour',

          '/plans/',
          '/plans/agency',
          '/plans/index',

          '/profile/',
          '/profile/index',
          '/profile/history',
          '/profile/meeting',
          '/profile/myestates',
          '/profile/myprojects',
          '/profile/notification',
          '/profile/support',
          '/profile/transaction'
        ]
      },
      {
        path: '/sitemap-dynamic.xml',
        routes: async () => {
            const { data } = await axios.get('http://evara.life:3088/estate_production')
            return data.map((product) =>`/detail/${product.id}`)
          }
      }
    ]

  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {

    short_name: "اوارا",
    name: "اوارا | خرید و فروش ملک در ترکیه",
    icons: [
      {
        "src": "icon.png",
        "sizes": "64x64 32x32 24x24 16x16",
        "type": "image/x-icon"
      }
    ],
    start_url: ".",
    display: "standalone",
    theme_color: "#000000",
    background_color: "#ffffff",

    manifest: {
      name: 'اوارا',
      short_name: 'اوارا',
      description: 'اوارا | خرید و فروش ملک در ترکیه',
      lang: 'fa',
      dir: 'rtl',
      useWebmanifestExtension: false,
    }
  },

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // publicPath: '.nuxt/dist/client/',
    // analyze: true,
  },

  generate: {
  }

}
