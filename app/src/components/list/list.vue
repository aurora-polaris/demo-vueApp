
<template>
  <div class="wrap">
    <!--列表头部 -->
    <div class="head">
      <ul class="cation-ul">
        <li class="cation-li">
          <router-link to="/list/listleft" class="cation-a">
            <span style="margin-left: 50px;" :class="{listSpan: isTrue}">分类</span>
          </router-link>
        </li>
         <li class="cation-li" @click="change">
          <router-link to="/list/brand" class="cation-a">
            <span style="margin-left: -10px">品牌</span>
          </router-link>
        </li>
       </ul>
    </div>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import foot from '../footer/footer.vue'
export default {
  data () {
    return {
      isTrue: true
    }
  },
  methods: {
    change () {
      this.isTrue = false
    }
  },
  components: {
    foot
  }
}
</script>

<style scoped>
 .head{
  width: 105%;
  height: 50px;
  background-color: #fff;
  margin-top: -5%;
  margin-left: -3%;
  border-bottom: 1px solid #ccc;
  z-index: 103;
  position: fixed;
 }
.listSpan{
  color:red
}
 .cation-ul{
     display:flex
 }
 .cation-li{
     list-style:none;
     float:left;
     flex:1
 }
 .cation-a{
    width:50%;
    height:50%;
    display:block;
    margin: 0 auto;
    color:#333;
    text-decoration: none;
 }
 .cation-a span{
     line-height:40px
 }
 .router-link-active{
     color:red
 }
</style>
