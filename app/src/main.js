// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import iview from 'iview'
import VueScroller from 'vue-scroller'
import Mint from 'mint-ui'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import loading from './load.gif'
import 'mint-ui/lib/style.css'
import './mock/mockSever'

Vue.config.productionTip = false
Vue.use(Mint)
Vue.use(VueScroller)
Vue.use(VueResource)
Vue.use(VueLazyload, {
  loading: loading
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
