<template>
  <div class="headerbox">
    <div class="main">
      <div class="clearfix">
        <div class="epet">
          <div class="location">
            <a href="#">
              <span class="c89">狗狗</span>
              <span class="c89">|</span>
              <span class="c89 myposition">重庆</span>
              <i></i>
            </a>
          </div>
          <p>
            <input type="search" placeholder="搜索商品和品牌"/>
          </p>
          <a href="#">
            <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png" class="mess">
          </a>
        </div>
      </div>

      <div class="find" ref="title">
       <ul>
         <li v-for="(list, index) in navLists"   @click="reds(index)" :key="index">
           <a href="#" :class="{ red:changeRed == index}">{{list.names}}</a>
         </li>
       </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      navLists: [
        {
          'names': '首页',
          'key': 0
        },
        {
          'names': '狗狗主粮',
          'key': 1
        },
        {
          'names': '零食',
          'key': 2
        },
        {
          'names': '医疗保健',
          'key': 3
        },
        {
          'names': '玩具',
          'key': 4
        },
        {
          'names': '外出',
          'key': 5
        },
        {
          'names': '其他',
          'key': 6
        }
      ],
      changeRed: 0
    }
  },
  methods: {
    reds: function (index) {
      this.changeRed = index
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.title, {
        click: true,
        scrollX: true
      })
    })
  }
}
</script>

<style scoped>
*{
  margin:0;
  padding:0
}
.headerbox{
  background:#fff;
  position: fixed;
  top:0;
  left:0;
  width:100%;
  z-index:9;
  box-shadow:2px 2px 2px #e9e9e9
}
.main{
  max-width:640px;
  margin:auto
}
.clearfix{
  padding:5px 10px 5px 10px;
}
.find{
  width:120%;
  height:35px;
  min-width:320px;
}
.find ul{
  display: flex;
  margin-left: -10%;
  margin-top:2%;
  width:120%
}
.find ul li{
  color:#666;
  list-style:none;
  width:67px;
  text-align: center;
}
.epet{
  padding: 8px 0;
  height:18px;
  background: #fff;
  text-align: center;
  display: -webkit-box;
  -webkit-box-align: center;
  display: -moz-box;
  -moz-box-align: center;
  width: 100%;
}
.epet p{
  position:relative;
}
.epet p input{
  width:135%;
  height:25px;
  border:0;
  background:#e9e9e9;
  border-radius:4px;
  color:#bcbcbc;
  text-indent:10px;
  font-size:13px;
  outline:0
}
.location{
  margin-right:20px;
  position:relative;
  font-size:14px;
  float:left;
}
.c89{
  color:#898989
}
.myposition{
  font-size:13px
}
.location i{
  position:absolute;
  top:10px;
  border-width:4px;
  font-size:0;
  right:-11px;
  line-height:0;
  border-style:solid solid dotted;
  border-color:#898989 transparent transparent
}
a{
  text-decoration: none;
}
.mess{
  width:25px;
  margin-left: 68px;
}
.red{
    color: red
}
a{
  color:#898989
}
</style>
