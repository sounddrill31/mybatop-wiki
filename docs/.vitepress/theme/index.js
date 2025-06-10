// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import CustomHome from './CustomHome.vue'
import CustomDownload from './CustomDownload.vue'
import CustomHeader from './CustomHeader.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
       'nav-bar-title-before': () => h(CustomHeader),
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('CustomHome', CustomHome)
    app.component('CustomDownload', CustomDownload)
    app.component('CustomHeader', CustomHeader)
  },
}
