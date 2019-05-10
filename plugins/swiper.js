import Vue from 'vue'

// require styles
import 'swiper/dist/css/swiper.css'

if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}