// import Vuetify from 'vuetify'
import DefaultLayout from '~/layouts/Default.vue'

// import 'vuetify/dist/vuetify.min.css'

export default function (Vue, { head }) {
  // Vue.use(Vuetify)
  Vue.component('Layout', DefaultLayout)

  head.script.push({
    src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
  })
}