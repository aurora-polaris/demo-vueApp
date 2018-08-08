<template>
  <div id="app">
   <router-link to="/home"></router-link>
   <router-view></router-view>
  </div>
</template>

<script>
import home from './components/home/home'
import list from './components/list/list'
import shoppingcar from './components/shoppingcar/shoppingcar'
import mypet from './components/mypet/mypet'
export default {
  components: {
    home, list, shoppingcar, mypet
  }
}
</script>

<style>

</style>
