import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bf33cfe0 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _55d81566 = () => interopDefault(import('..\\pages\\500.vue' /* webpackChunkName: "pages/500" */))
const _42f60aaa = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _65e4d698 = () => interopDefault(import('..\\pages\\index\\index.vue' /* webpackChunkName: "pages/index/index" */))
const _3089ae9e = () => interopDefault(import('..\\pages\\index\\aboutus.vue' /* webpackChunkName: "pages/index/aboutus" */))
const _076888f8 = () => interopDefault(import('..\\pages\\index\\contactus.vue' /* webpackChunkName: "pages/index/contactus" */))
const _a2d3cc98 = () => interopDefault(import('..\\pages\\index\\edit.vue' /* webpackChunkName: "pages/index/edit" */))
const _fcc38388 = () => interopDefault(import('..\\pages\\index\\FAQ.vue' /* webpackChunkName: "pages/index/FAQ" */))
const _051d73e6 = () => interopDefault(import('..\\pages\\index\\new.vue' /* webpackChunkName: "pages/index/new" */))
const _1463fc30 = () => interopDefault(import('..\\pages\\index\\plans.vue' /* webpackChunkName: "pages/index/plans" */))
const _2a197b5c = () => interopDefault(import('..\\pages\\index\\plans\\index.vue' /* webpackChunkName: "pages/index/plans/index" */))
const _3123bd96 = () => interopDefault(import('..\\pages\\index\\plans\\agency.vue' /* webpackChunkName: "pages/index/plans/agency" */))
const _0274d5d2 = () => interopDefault(import('..\\pages\\index\\search.vue' /* webpackChunkName: "pages/index/search" */))
const _f23dcdf0 = () => interopDefault(import('..\\pages\\index\\services.vue' /* webpackChunkName: "pages/index/services" */))
const _4d7f8738 = () => interopDefault(import('..\\pages\\index\\turkishbuyhouse.vue' /* webpackChunkName: "pages/index/turkishbuyhouse" */))
const _a6c04aec = () => interopDefault(import('..\\pages\\index\\turkishcitizenship.vue' /* webpackChunkName: "pages/index/turkishcitizenship" */))
const _71ebc01c = () => interopDefault(import('..\\pages\\index\\turkishpassport.vue' /* webpackChunkName: "pages/index/turkishpassport" */))
const _f22b22ae = () => interopDefault(import('..\\pages\\index\\virtualtour.vue' /* webpackChunkName: "pages/index/virtualtour" */))
const _474ec64d = () => interopDefault(import('..\\pages\\index\\detail\\_project\\index.vue' /* webpackChunkName: "pages/index/detail/_project/index" */))
const _52eef0b8 = () => interopDefault(import('..\\pages\\estate.vue' /* webpackChunkName: "pages/estate" */))
const _57161801 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _2a926961 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _329f8fdd = () => interopDefault(import('..\\pages\\profile\\favorite.vue' /* webpackChunkName: "pages/profile/favorite" */))
const _590cdb3a = () => interopDefault(import('..\\pages\\profile\\history.vue' /* webpackChunkName: "pages/profile/history" */))
const _ec5266ec = () => interopDefault(import('..\\pages\\profile\\meeting.vue' /* webpackChunkName: "pages/profile/meeting" */))
const _3ab0180a = () => interopDefault(import('..\\pages\\profile\\myestates.vue' /* webpackChunkName: "pages/profile/myestates" */))
const _5d2935b2 = () => interopDefault(import('..\\pages\\profile\\myprojects.vue' /* webpackChunkName: "pages/profile/myprojects" */))
const _1a1f132c = () => interopDefault(import('..\\pages\\profile\\notification.vue' /* webpackChunkName: "pages/profile/notification" */))
const _5026181e = () => interopDefault(import('..\\pages\\profile\\support.vue' /* webpackChunkName: "pages/profile/support" */))
const _86da4fa6 = () => interopDefault(import('..\\pages\\profile\\transaction.vue' /* webpackChunkName: "pages/profile/transaction" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _bf33cfe0,
    name: "404___fa"
  }, {
    path: "/500",
    component: _55d81566,
    name: "500___fa"
  }, {
    path: "/ar",
    component: _42f60aaa,
    children: [{
      path: "",
      component: _65e4d698,
      name: "index___ar"
    }, {
      path: "aboutus",
      component: _3089ae9e,
      name: "index-aboutus___ar"
    }, {
      path: "contactus",
      component: _076888f8,
      name: "index-contactus___ar"
    }, {
      path: "edit",
      component: _a2d3cc98,
      name: "index-edit___ar"
    }, {
      path: "FAQ",
      component: _fcc38388,
      name: "index-FAQ___ar"
    }, {
      path: "new",
      component: _051d73e6,
      name: "index-new___ar"
    }, {
      path: "plans",
      component: _1463fc30,
      children: [{
        path: "",
        component: _2a197b5c,
        name: "index-plans___ar"
      }, {
        path: "agency",
        component: _3123bd96,
        name: "index-plans-agency___ar"
      }]
    }, {
      path: "search",
      component: _0274d5d2,
      name: "index-search___ar"
    }, {
      path: "services",
      component: _f23dcdf0,
      name: "index-services___ar"
    }, {
      path: "turkishbuyhouse",
      component: _4d7f8738,
      name: "index-turkishbuyhouse___ar"
    }, {
      path: "turkishcitizenship",
      component: _a6c04aec,
      name: "index-turkishcitizenship___ar"
    }, {
      path: "turkishpassport",
      component: _71ebc01c,
      name: "index-turkishpassport___ar"
    }, {
      path: "virtualtour",
      component: _f22b22ae,
      name: "index-virtualtour___ar"
    }, {
      path: "detail/:project",
      component: _474ec64d,
      name: "index-detail-project___ar"
    }]
  }, {
    path: "/ch",
    component: _42f60aaa,
    children: [{
      path: "",
      component: _65e4d698,
      name: "index___ch"
    }, {
      path: "aboutus",
      component: _3089ae9e,
      name: "index-aboutus___ch"
    }, {
      path: "contactus",
      component: _076888f8,
      name: "index-contactus___ch"
    }, {
      path: "edit",
      component: _a2d3cc98,
      name: "index-edit___ch"
    }, {
      path: "FAQ",
      component: _fcc38388,
      name: "index-FAQ___ch"
    }, {
      path: "new",
      component: _051d73e6,
      name: "index-new___ch"
    }, {
      path: "plans",
      component: _1463fc30,
      children: [{
        path: "",
        component: _2a197b5c,
        name: "index-plans___ch"
      }, {
        path: "agency",
        component: _3123bd96,
        name: "index-plans-agency___ch"
      }]
    }, {
      path: "search",
      component: _0274d5d2,
      name: "index-search___ch"
    }, {
      path: "services",
      component: _f23dcdf0,
      name: "index-services___ch"
    }, {
      path: "turkishbuyhouse",
      component: _4d7f8738,
      name: "index-turkishbuyhouse___ch"
    }, {
      path: "turkishcitizenship",
      component: _a6c04aec,
      name: "index-turkishcitizenship___ch"
    }, {
      path: "turkishpassport",
      component: _71ebc01c,
      name: "index-turkishpassport___ch"
    }, {
      path: "virtualtour",
      component: _f22b22ae,
      name: "index-virtualtour___ch"
    }, {
      path: "detail/:project",
      component: _474ec64d,
      name: "index-detail-project___ch"
    }]
  }, {
    path: "/en",
    component: _42f60aaa,
    children: [{
      path: "",
      component: _65e4d698,
      name: "index___en"
    }, {
      path: "aboutus",
      component: _3089ae9e,
      name: "index-aboutus___en"
    }, {
      path: "contactus",
      component: _076888f8,
      name: "index-contactus___en"
    }, {
      path: "edit",
      component: _a2d3cc98,
      name: "index-edit___en"
    }, {
      path: "FAQ",
      component: _fcc38388,
      name: "index-FAQ___en"
    }, {
      path: "new",
      component: _051d73e6,
      name: "index-new___en"
    }, {
      path: "plans",
      component: _1463fc30,
      children: [{
        path: "",
        component: _2a197b5c,
        name: "index-plans___en"
      }, {
        path: "agency",
        component: _3123bd96,
        name: "index-plans-agency___en"
      }]
    }, {
      path: "search",
      component: _0274d5d2,
      name: "index-search___en"
    }, {
      path: "services",
      component: _f23dcdf0,
      name: "index-services___en"
    }, {
      path: "turkishbuyhouse",
      component: _4d7f8738,
      name: "index-turkishbuyhouse___en"
    }, {
      path: "turkishcitizenship",
      component: _a6c04aec,
      name: "index-turkishcitizenship___en"
    }, {
      path: "turkishpassport",
      component: _71ebc01c,
      name: "index-turkishpassport___en"
    }, {
      path: "virtualtour",
      component: _f22b22ae,
      name: "index-virtualtour___en"
    }, {
      path: "detail/:project",
      component: _474ec64d,
      name: "index-detail-project___en"
    }]
  }, {
    path: "/estate",
    component: _52eef0b8,
    name: "estate___fa"
  }, {
    path: "/profile",
    component: _57161801,
    children: [{
      path: "",
      component: _2a926961,
      name: "profile___fa"
    }, {
      path: "favorite",
      component: _329f8fdd,
      name: "profile-favorite___fa"
    }, {
      path: "history",
      component: _590cdb3a,
      name: "profile-history___fa"
    }, {
      path: "meeting",
      component: _ec5266ec,
      name: "profile-meeting___fa"
    }, {
      path: "myestates",
      component: _3ab0180a,
      name: "profile-myestates___fa"
    }, {
      path: "myprojects",
      component: _5d2935b2,
      name: "profile-myprojects___fa"
    }, {
      path: "notification",
      component: _1a1f132c,
      name: "profile-notification___fa"
    }, {
      path: "support",
      component: _5026181e,
      name: "profile-support___fa"
    }, {
      path: "transaction",
      component: _86da4fa6,
      name: "profile-transaction___fa"
    }]
  }, {
    path: "/ru",
    component: _42f60aaa,
    children: [{
      path: "",
      component: _65e4d698,
      name: "index___ru"
    }, {
      path: "aboutus",
      component: _3089ae9e,
      name: "index-aboutus___ru"
    }, {
      path: "contactus",
      component: _076888f8,
      name: "index-contactus___ru"
    }, {
      path: "edit",
      component: _a2d3cc98,
      name: "index-edit___ru"
    }, {
      path: "FAQ",
      component: _fcc38388,
      name: "index-FAQ___ru"
    }, {
      path: "new",
      component: _051d73e6,
      name: "index-new___ru"
    }, {
      path: "plans",
      component: _1463fc30,
      children: [{
        path: "",
        component: _2a197b5c,
        name: "index-plans___ru"
      }, {
        path: "agency",
        component: _3123bd96,
        name: "index-plans-agency___ru"
      }]
    }, {
      path: "search",
      component: _0274d5d2,
      name: "index-search___ru"
    }, {
      path: "services",
      component: _f23dcdf0,
      name: "index-services___ru"
    }, {
      path: "turkishbuyhouse",
      component: _4d7f8738,
      name: "index-turkishbuyhouse___ru"
    }, {
      path: "turkishcitizenship",
      component: _a6c04aec,
      name: "index-turkishcitizenship___ru"
    }, {
      path: "turkishpassport",
      component: _71ebc01c,
      name: "index-turkishpassport___ru"
    }, {
      path: "virtualtour",
      component: _f22b22ae,
      name: "index-virtualtour___ru"
    }, {
      path: "detail/:project",
      component: _474ec64d,
      name: "index-detail-project___ru"
    }]
  }, {
    path: "/tr",
    component: _42f60aaa,
    children: [{
      path: "",
      component: _65e4d698,
      name: "index___tr"
    }, {
      path: "aboutus",
      component: _3089ae9e,
      name: "index-aboutus___tr"
    }, {
      path: "contactus",
      component: _076888f8,
      name: "index-contactus___tr"
    }, {
      path: "edit",
      component: _a2d3cc98,
      name: "index-edit___tr"
    }, {
      path: "FAQ",
      component: _fcc38388,
      name: "index-FAQ___tr"
    }, {
      path: "new",
      component: _051d73e6,
      name: "index-new___tr"
    }, {
      path: "plans",
      component: _1463fc30,
      children: [{
        path: "",
        component: _2a197b5c,
        name: "index-plans___tr"
      }, {
        path: "agency",
        component: _3123bd96,
        name: "index-plans-agency___tr"
      }]
    }, {
      path: "search",
      component: _0274d5d2,
      name: "index-search___tr"
    }, {
      path: "services",
      component: _f23dcdf0,
      name: "index-services___tr"
    }, {
      path: "turkishbuyhouse",
      component: _4d7f8738,
      name: "index-turkishbuyhouse___tr"
    }, {
      path: "turkishcitizenship",
      component: _a6c04aec,
      name: "index-turkishcitizenship___tr"
    }, {
      path: "turkishpassport",
      component: _71ebc01c,
      name: "index-turkishpassport___tr"
    }, {
      path: "virtualtour",
      component: _f22b22ae,
      name: "index-virtualtour___tr"
    }, {
      path: "detail/:project",
      component: _474ec64d,
      name: "index-detail-project___tr"
    }]
  }, {
    path: "/ar/404",
    component: _bf33cfe0,
    name: "404___ar"
  }, {
    path: "/ar/500",
    component: _55d81566,
    name: "500___ar"
  }, {
    path: "/ar/estate",
    component: _52eef0b8,
    name: "estate___ar"
  }, {
    path: "/ar/profile",
    component: _57161801,
    children: [{
      path: "",
      component: _2a926961,
      name: "profile___ar"
    }, {
      path: "favorite",
      component: _329f8fdd,
      name: "profile-favorite___ar"
    }, {
      path: "history",
      component: _590cdb3a,
      name: "profile-history___ar"
    }, {
      path: "meeting",
      component: _ec5266ec,
      name: "profile-meeting___ar"
    }, {
      path: "myestates",
      component: _3ab0180a,
      name: "profile-myestates___ar"
    }, {
      path: "myprojects",
      component: _5d2935b2,
      name: "profile-myprojects___ar"
    }, {
      path: "notification",
      component: _1a1f132c,
      name: "profile-notification___ar"
    }, {
      path: "support",
      component: _5026181e,
      name: "profile-support___ar"
    }, {
      path: "transaction",
      component: _86da4fa6,
      name: "profile-transaction___ar"
    }]
  }, {
    path: "/ch/404",
    component: _bf33cfe0,
    name: "404___ch"
  }, {
    path: "/ch/500",
    component: _55d81566,
    name: "500___ch"
  }, {
    path: "/ch/estate",
    component: _52eef0b8,
    name: "estate___ch"
  }, {
    path: "/ch/profile",
    component: _57161801,
    children: [{
      path: "",
      component: _2a926961,
      name: "profile___ch"
    }, {
      path: "favorite",
      component: _329f8fdd,
      name: "profile-favorite___ch"
    }, {
      path: "history",
      component: _590cdb3a,
      name: "profile-history___ch"
    }, {
      path: "meeting",
      component: _ec5266ec,
      name: "profile-meeting___ch"
    }, {
      path: "myestates",
      component: _3ab0180a,
      name: "profile-myestates___ch"
    }, {
      path: "myprojects",
      component: _5d2935b2,
      name: "profile-myprojects___ch"
    }, {
      path: "notification",
      component: _1a1f132c,
      name: "profile-notification___ch"
    }, {
      path: "support",
      component: _5026181e,
      name: "profile-support___ch"
    }, {
      path: "transaction",
      component: _86da4fa6,
      name: "profile-transaction___ch"
    }]
  }, {
    path: "/en/404",
    component: _bf33cfe0,
    name: "404___en"
  }, {
    path: "/en/500",
    component: _55d81566,
    name: "500___en"
  }, {
    path: "/en/estate",
    component: _52eef0b8,
    name: "estate___en"
  }, {
    path: "/en/profile",
    component: _57161801,
    children: [{
      path: "",
      component: _2a926961,
      name: "profile___en"
    }, {
      path: "favorite",
      component: _329f8fdd,
      name: "profile-favorite___en"
    }, {
      path: "history",
      component: _590cdb3a,
      name: "profile-history___en"
    }, {
      path: "meeting",
      component: _ec5266ec,
      name: "profile-meeting___en"
    }, {
      path: "myestates",
      component: _3ab0180a,
      name: "profile-myestates___en"
    }, {
      path: "myprojects",
      component: _5d2935b2,
      name: "profile-myprojects___en"
    }, {
      path: "notification",
      component: _1a1f132c,
      name: "profile-notification___en"
    }, {
      path: "support",
      component: _5026181e,
      name: "profile-support___en"
    }, {
      path: "transaction",
      component: _86da4fa6,
      name: "profile-transaction___en"
    }]
  }, {
    path: "/ru/404",
    component: _bf33cfe0,
    name: "404___ru"
  }, {
    path: "/ru/500",
    component: _55d81566,
    name: "500___ru"
  }, {
    path: "/ru/estate",
    component: _52eef0b8,
    name: "estate___ru"
  }, {
    path: "/ru/profile",
    component: _57161801,
    children: [{
      path: "",
      component: _2a926961,
      name: "profile___ru"
    }, {
      path: "favorite",
      component: _329f8fdd,
      name: "profile-favorite___ru"
    }, {
      path: "history",
      component: _590cdb3a,
      name: "profile-history___ru"
    }, {
      path: "meeting",
      component: _ec5266ec,
      name: "profile-meeting___ru"
    }, {
      path: "myestates",
      component: _3ab0180a,
      name: "profile-myestates___ru"
    }, {
      path: "myprojects",
      component: _5d2935b2,
      name: "profile-myprojects___ru"
    }, {
      path: "notification",
      component: _1a1f132c,
      name: "profile-notification___ru"
    }, {
      path: "support",
      component: _5026181e,
      name: "profile-support___ru"
    }, {
      path: "transaction",
      component: _86da4fa6,
      name: "profile-transaction___ru"
    }]
  }, {
    path: "/tr/404",
    component: _bf33cfe0,
    name: "404___tr"
  }, {
    path: "/tr/500",
    component: _55d81566,
    name: "500___tr"
  }, {
    path: "/tr/estate",
    component: _52eef0b8,
    name: "estate___tr"
  }, {
    path: "/tr/profile",
    component: _57161801,
    children: [{
      path: "",
      component: _2a926961,
      name: "profile___tr"
    }, {
      path: "favorite",
      component: _329f8fdd,
      name: "profile-favorite___tr"
    }, {
      path: "history",
      component: _590cdb3a,
      name: "profile-history___tr"
    }, {
      path: "meeting",
      component: _ec5266ec,
      name: "profile-meeting___tr"
    }, {
      path: "myestates",
      component: _3ab0180a,
      name: "profile-myestates___tr"
    }, {
      path: "myprojects",
      component: _5d2935b2,
      name: "profile-myprojects___tr"
    }, {
      path: "notification",
      component: _1a1f132c,
      name: "profile-notification___tr"
    }, {
      path: "support",
      component: _5026181e,
      name: "profile-support___tr"
    }, {
      path: "transaction",
      component: _86da4fa6,
      name: "profile-transaction___tr"
    }]
  }, {
    path: "/",
    component: _42f60aaa,
    children: [{
      path: "",
      component: _65e4d698,
      name: "index___fa"
    }, {
      path: "aboutus",
      component: _3089ae9e,
      name: "index-aboutus___fa"
    }, {
      path: "contactus",
      component: _076888f8,
      name: "index-contactus___fa"
    }, {
      path: "edit",
      component: _a2d3cc98,
      name: "index-edit___fa"
    }, {
      path: "FAQ",
      component: _fcc38388,
      name: "index-FAQ___fa"
    }, {
      path: "new",
      component: _051d73e6,
      name: "index-new___fa"
    }, {
      path: "plans",
      component: _1463fc30,
      children: [{
        path: "",
        component: _2a197b5c,
        name: "index-plans___fa"
      }, {
        path: "agency",
        component: _3123bd96,
        name: "index-plans-agency___fa"
      }]
    }, {
      path: "search",
      component: _0274d5d2,
      name: "index-search___fa"
    }, {
      path: "services",
      component: _f23dcdf0,
      name: "index-services___fa"
    }, {
      path: "turkishbuyhouse",
      component: _4d7f8738,
      name: "index-turkishbuyhouse___fa"
    }, {
      path: "turkishcitizenship",
      component: _a6c04aec,
      name: "index-turkishcitizenship___fa"
    }, {
      path: "turkishpassport",
      component: _71ebc01c,
      name: "index-turkishpassport___fa"
    }, {
      path: "virtualtour",
      component: _f22b22ae,
      name: "index-virtualtour___fa"
    }, {
      path: "detail/:project",
      component: _474ec64d,
      name: "index-detail-project___fa"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
