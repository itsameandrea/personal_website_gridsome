import DefaultLayout from '~/layouts/Default.vue'

import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

import colors from 'vuetify/es5/util/colors'

export default function (Vue, { head }) {
  Vue.use(Vuetify, {
    theme: {
      primary: colors.red.darken2, // a color that is not in the material colors palette
      accent: colors.blue.darken1,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  })

  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'assets/styles/main.css'
  })

  head.script.push({
    src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
  })

  head.script.push({
    src: 'assets/scripts/netlifyRedirect.js'
  })
}