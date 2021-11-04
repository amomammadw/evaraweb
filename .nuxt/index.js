import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_19a25563 from 'nuxt_plugin_plugin_19a25563' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_bootstrapvue_0b09fe35 from 'nuxt_plugin_bootstrapvue_0b09fe35' // Source: .\\bootstrap-vue.js (mode: 'all')
import nuxt_plugin_vuesocialsharingplugin_035881ff from 'nuxt_plugin_vuesocialsharingplugin_035881ff' // Source: .\\vue-social-sharing-plugin.js (mode: 'all')
import nuxt_plugin_gtm_2b13165c from 'nuxt_plugin_gtm_2b13165c' // Source: .\\gtm.js (mode: 'all')
import nuxt_plugin_vlazyload_5e918674 from 'nuxt_plugin_vlazyload_5e918674' // Source: .\\v-lazy-load.js (mode: 'all')
import nuxt_plugin_toast_40265a96 from 'nuxt_plugin_toast_40265a96' // Source: .\\toast.js (mode: 'client')
import nuxt_plugin_storage_35a44ebe from 'nuxt_plugin_storage_35a44ebe' // Source: .\\storage.js (mode: 'all')
import nuxt_plugin_pluginutils_2df5f528 from 'nuxt_plugin_pluginutils_2df5f528' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginseo_2781127c from 'nuxt_plugin_pluginseo_2781127c' // Source: .\\nuxt-i18n\\plugin.seo.js (mode: 'all')
import nuxt_plugin_pluginrouting_3e4dd873 from 'nuxt_plugin_pluginrouting_3e4dd873' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_f79fc048 from 'nuxt_plugin_pluginmain_f79fc048' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_workbox_cef8dcbc from 'nuxt_plugin_workbox_cef8dcbc' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_eec877bc from 'nuxt_plugin_metaplugin_eec877bc' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_e5792cd4 from 'nuxt_plugin_iconplugin_e5792cd4' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_13bc8606 from 'nuxt_plugin_axios_13bc8606' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_googleanalytics_05761b40 from 'nuxt_plugin_googleanalytics_05761b40' // Source: .\\google-analytics.js (mode: 'client')
import nuxt_plugin_bootstrap_68fdc73f from 'nuxt_plugin_bootstrap_68fdc73f' // Source: ..\\plugins\\bootstrap.js (mode: 'client')
import nuxt_plugin_axios_5659d192 from 'nuxt_plugin_axios_5659d192' // Source: ..\\plugins\\axios.js (mode: 'client')
import nuxt_plugin_nuxtswiperplugin_622602ba from 'nuxt_plugin_nuxtswiperplugin_622602ba' // Source: ..\\plugins\\nuxt-swiper-plugin.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"اوارا - جامع ترین وب سایت املاک بین المللی","htmlAttrs":{"prefix":"og: http:\u002F\u002Fogp.me\u002Fns#"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"http-equiv":"Content-Type","content":"text\u002Fhtml; charset=utf-8"},{"http-equiv":"X-UA-Compatible","content":"IE=edge"},{"name":"keywords","content":"RealEstate ,Turkey ,Smart, 3d home,website, ایوارا , خرید و فروش ملک , ترکیه , استانبول , ازمیر , ملک"},{"name":"description","hid":"description","content":"EvAra Life | Intelligent Real Estate Solution"},{"name":"Developer","content":"NSD.org"},{"name":"Author","content":"EvAra"},{"hid":"اوارا - خرید و فروش ملک در ترکیه","name":"اوارا","content":" خرید و فروش ملک در ترکیه "},{"property":"og:locale","hid":"og:locale","content":"tr_TR"},{"property":"og:type","hid":"og:type","content":"website"},{"property":"og:title","hid":"og:title","content":"EvAra Life"},{"property":"og:description","hid":"og:description","content":"Intelligent Real Estate Solution"},{"property":"og:image","hid":"og:image","content":"https:\u002F\u002Fwww.evara.life\u002Fthumb\u002Fog_test.jpg"},{"property":"og:image:secure_url","hid":"og:image:secure_url","content":"https:\u002F\u002Fwww.evara.life\u002Fthumb\u002Fog_test.jpg"},{"property":"og:image:alt","hid":"og:image:alt","content":"Evara Life"},{"property":"og:url","hid":"og:url","content":"https:\u002F\u002Fevara.life"},{"property":"og:site_name","hid":"og:site_name","content":"Evara Life"},{"name":"twitter:card","hid":"twitter:card","content":"Evara"},{"name":"twitter:site","hid":"twitter:site","content":"@Evara"},{"name":"twitter:title","hid":"twitter:title","content":"Evara"},{"name":"twitter:url","hid":"twitter:url","content":"https:\u002F\u002Fwww.evara.life"},{"name":"twitter:image","hid":"twitter:image","content":"https:\u002F\u002Fwww.evara.life\u002Fthumb\u002Fog_test.jpg"},{"name":"twitter:description","hid":"twitter:description","content":"EvAra Life | Intelligent Real Estate Solution"},{"name":"twitter:creator","content":"@evara.life"},{"name":"msapplication-TileColor","content":"#8cc63f"},{"name":"msapplication-TileImage","content":"\u002Fimages\u002Ficons\u002Fmstile-144x144.png"},{"name":"theme-color","content":"#d7eeb8"},{"name":"mobile-web-app-capable","content":"yes"},{"name":"apple-touch-fullscreen","content":"yes"},{"name":"apple-mobile-web-app-capable","content":"yes"},{"name":"apple-mobile-web-app-status-bar-style","content":"default"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Fimages\u002Ficons\u002Ffavicon.ico"},{"rel":"apple-touch-icon","type":"image\u002Fx-icon","href":"\u002Fimages\u002Ficons\u002Fapple-touch-icon.png"},{"rel":"icon","type":"image\u002Fpng","size":"32x32","href":"\u002Fimages\u002Ficons\u002Ffavicon-32x32.png"},{"rel":"icon","type":"image\u002Fpng","size":"194x194","href":"\u002Fimages\u002Ficons\u002Ffavicon-194x194.png"},{"rel":"icon","type":"image\u002Fpng","size":"16x16","href":"\u002Fimages\u002Ficons\u002Ffavicon-16x16.png"},{"rel":"mask-icon","href":"\u002Fsafari-pinned-tab.svg","color":"#5bbad5"}],"style":[],"script":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_19a25563 === 'function') {
    await nuxt_plugin_plugin_19a25563(app.context, inject)
  }

  if (typeof nuxt_plugin_bootstrapvue_0b09fe35 === 'function') {
    await nuxt_plugin_bootstrapvue_0b09fe35(app.context, inject)
  }

  if (typeof nuxt_plugin_vuesocialsharingplugin_035881ff === 'function') {
    await nuxt_plugin_vuesocialsharingplugin_035881ff(app.context, inject)
  }

  if (typeof nuxt_plugin_gtm_2b13165c === 'function') {
    await nuxt_plugin_gtm_2b13165c(app.context, inject)
  }

  if (typeof nuxt_plugin_vlazyload_5e918674 === 'function') {
    await nuxt_plugin_vlazyload_5e918674(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_toast_40265a96 === 'function') {
    await nuxt_plugin_toast_40265a96(app.context, inject)
  }

  if (typeof nuxt_plugin_storage_35a44ebe === 'function') {
    await nuxt_plugin_storage_35a44ebe(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_2df5f528 === 'function') {
    await nuxt_plugin_pluginutils_2df5f528(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginseo_2781127c === 'function') {
    await nuxt_plugin_pluginseo_2781127c(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_3e4dd873 === 'function') {
    await nuxt_plugin_pluginrouting_3e4dd873(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_f79fc048 === 'function') {
    await nuxt_plugin_pluginmain_f79fc048(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_cef8dcbc === 'function') {
    await nuxt_plugin_workbox_cef8dcbc(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_eec877bc === 'function') {
    await nuxt_plugin_metaplugin_eec877bc(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_e5792cd4 === 'function') {
    await nuxt_plugin_iconplugin_e5792cd4(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_13bc8606 === 'function') {
    await nuxt_plugin_axios_13bc8606(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_05761b40 === 'function') {
    await nuxt_plugin_googleanalytics_05761b40(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_bootstrap_68fdc73f === 'function') {
    await nuxt_plugin_bootstrap_68fdc73f(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_axios_5659d192 === 'function') {
    await nuxt_plugin_axios_5659d192(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_nuxtswiperplugin_622602ba === 'function') {
    await nuxt_plugin_nuxtswiperplugin_622602ba(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
