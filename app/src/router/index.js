import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home'
import list from '../components/list/list'
import shoppingcar from '../components/shoppingcar/shoppingcar'
import mypet from '../components/mypet/mypet'
import listleft from '../components/list/listleft'
import brand from '../components/list/brand'

import remen from '../components/list/rightbox/remen'
import guoji from '../components/list/rightbox/guoji'
import qingliang from '../components/list/rightbox/qingliang'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/list',
      component: list,
      children: [
        {
          path: 'listleft',
          component: listleft
        }, {
          path: 'brand',
          component: brand
        },
        {
          path: '/',
          component: listleft
        }
      ]
    },
    {
      path: '/shoppingcar',
      component: shoppingcar
    },
    {
      path: '/mypet',
      component: mypet
    },
    {
      path: '/remen',
      component: remen
    },
    {
      path: '/guoji',
      component: guoji
    },
    {
      path: '/qingliang',
      component: qingliang
    }
  ]
})
