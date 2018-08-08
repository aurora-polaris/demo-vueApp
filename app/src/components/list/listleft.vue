<template>
  <div class="wrap">
    <div class="leftbox scrollbar-none">
      <div style="margin-top: -16px;">
        <ul>
            <li class="ftc bgfff" v-for="(list, index) in navLists" :key="index" :class="{ back:changeRed == index}"  @click="reds(index)">
              <a :href="list.link" target="iframe_a" :class="{ red:changeRed == index}" >{{list.text}}</a>
            </li>
        </ul>
      </div>
  </div>
  <iframe src="http://localhost:8080/#/remen" name="iframe_a" frameborder="0" width="350" height="700" scrolling='no' style="margin-top:4%">
</iframe>
</div>
</template>
<script>
/*
            <li class="ftc bgfff"><a href="http://localhost:8080/#/remen" target="iframe_a">为您推荐</a></li>
            <li class="ftc bgfff"><a href="http://localhost:8080/#/guoji" target="iframe_a">E宠国际</a></li>
            <li class="ftc bgfff"><a href="http://localhost:8080/#/qingliang" target="iframe_a">清凉消暑</a></li>
            <li class="ftc bgfff"><a href="http://localhost:8080/#/remen" target="iframe_a">出游洗澡</a></li>
            <li class="ftc bgfff"><a href="http://localhost:8080/#/guoji" target="iframe_a">狗狗主粮</a></li>
            <li class="ftc bgfff"><a href="http://localhost:8080/#/qingliang" target="iframe_a">狗狗零食</a></li>
            <li class="ftc bgfff"><a href="http://localhost:8080/#/remen" target="iframe_a">狗狗玩具</a></li>
            <li class="ftc bgfff"><a href="http://localhost:8080/#/guoji" target="iframe_a">狗狗清洁</a></li>
            <li class="ftc bgfff"><a href="http://localhost:8080/#/qingliang" target="iframe_a">狗狗保健</a></li>
            <li class="ftc bgfff"><a href="http://localhost:8080/#/remen" target="iframe_a">狗狗护理</a></li>
            <li class="ftc bgfff"><a href="http://localhost:8080/#/guoji" target="iframe_a">狗狗生活</a></li>
            <li class="ftc bgfff"><a href="http://localhost:8080/#/qingliang" target="iframe_a">狗狗牵引</a></li>
            <li class="ftc bgfff"><a href="http://localhost:8080/#/guoji" target="iframe_a">狗狗美容</a></li>
            <li class="ftc bgfff"><a href="http://localhost:8080/#/remen" target="iframe_a">狗狗服饰</a></li> */
export default {
  data () {
    return {
      navLists: [
        {
          'text': '为您推荐',
          'link': 'http://localhost:8080/#/remen',
          'key': 0
        },
        {
          'text': 'E宠国际',
          'link': 'http://localhost:8080/#/guoji',
          'key': 1
        },
        {
          'text': '清凉消暑',
          'link': 'http://localhost:8080/#/qingliang',
          'key': 2
        },
        {
          'text': '出游洗澡',
          'link': 'http://localhost:8080/#/guoji',
          'key': 3
        },
        {
          'text': '狗狗主粮',
          'link': 'http://localhost:8080/#/remen',
          'key': 4
        },
        {
          'text': '狗狗零食',
          'link': 'http://localhost:8080/#/qingliang',
          'key': 5
        },
        {
          'text': '狗狗玩具',
          'link': 'http://localhost:8080/#/guoji',
          'key': 6
        },
        {
          'text': '狗狗清洁',
          'link': 'http://localhost:8080/#/qingliang',
          'key': 7
        },
        {
          'text': '狗狗保健',
          'link': 'http://localhost:8080/#/remen',
          'key': 8
        },
        {
          'text': '狗狗护理',
          'link': 'http://localhost:8080/#/qingliang',
          'key': 9
        },
        {
          'text': '狗狗生活',
          'link': 'http://localhost:8080/#/guoji',
          'key': 10
        },
        {
          'text': '狗狗牵引',
          'link': 'http://localhost:8080/#/qingliang',
          'key': 11
        },
        {
          'text': '狗狗服饰',
          'link': 'http://localhost:8080/#/remen',
          'key': 12
        },
        {
          'text': '狗狗清洁',
          'link': 'http://localhost:8080/#/qingliang',
          'key': 13
        }
      ],
      changeRed: 0
    }
  },
  methods: {
    reds: function (index) {
      this.changeRed = index
    }
  }
}
</script>
<style scoped>
.leftbox{
    position:fixed;
    top:40px;
    left:0;
    overflow-y:scroll;
    bottom:0;
    padding-bottom:45px;
    border-right:5px solid #f3f4f5;
    background:#fff;
    width: 22%;
}
.scrollbar-none::-webkit-scrollbar {display:none}
ul li{
  list-style:none
}
.leftbox ul li{
    border-bottom: 1px solid #dadcde;
    width: 80px;
    height: 24px;
    line-height: 12px;
    font-size: 13px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
    margin-left:-90%;
    padding-top: 20px
}
.bgff{
    background:#fff
}
a{
    text-decoration:none;
    color: #333;
}
.red{
    color: red
}
.back{
    background: #F3F4F5
}
</style>
