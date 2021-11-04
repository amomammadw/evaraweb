

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {},
  vueI18nLoader: false,
  locales: [{"code":"en","iso":"en","file":"en.js","dir":"ltr"},{"code":"fa","iso":"fa","file":"fa.js","dir":"rtl"},{"code":"ar","iso":"ar","file":"ar.js","dir":"rtl"},{"code":"ru","iso":"ru","file":"ru.js","dir":"ltr"},{"code":"ch","iso":"ch","file":"ch.js","dir":"ltr"},{"code":"tr","iso":"tr","file":"tr.js","dir":"ltr"}],
  defaultLocale: "fa",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "C:\\Users\\amomammadw\\Downloads\\Telegram Desktop\\Web\\lang",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: true,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en","iso":"en","file":"en.js","dir":"ltr"},{"code":"fa","iso":"fa","file":"fa.js","dir":"rtl"},{"code":"ar","iso":"ar","file":"ar.js","dir":"rtl"},{"code":"ru","iso":"ru","file":"ru.js","dir":"ltr"},{"code":"ch","iso":"ch","file":"ch.js","dir":"ltr"},{"code":"tr","iso":"tr","file":"tr.js","dir":"ltr"}],
  localeCodes: ["en","fa","ar","ru","ch","tr"],
}

export const localeMessages = {
  'en.js': () => import('../..\\lang\\en.js' /* webpackChunkName: "lang-en.js" */),
  'fa.js': () => import('../..\\lang\\fa.js' /* webpackChunkName: "lang-fa.js" */),
  'ar.js': () => import('../..\\lang\\ar.js' /* webpackChunkName: "lang-ar.js" */),
  'ru.js': () => import('../..\\lang\\ru.js' /* webpackChunkName: "lang-ru.js" */),
  'ch.js': () => import('../..\\lang\\ch.js' /* webpackChunkName: "lang-ch.js" */),
  'tr.js': () => import('../..\\lang\\tr.js' /* webpackChunkName: "lang-tr.js" */),
}
