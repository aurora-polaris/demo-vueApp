<template>
  <div class="surprise">
    <div class="surpriseTitle">
      <div class="title">
        <img src="./suprice.png">
      </div>
      <div class="text">距本场结束</div>
      <div class="time">
        <div>
          <p style="font-size:13px; float:left">{{time}}</p>
        </div>
      </div>
      <div class="more">
         <a href="#">
           <img src="https://img2.epetbar.com/nowater/2016-10/24/20/30b2568de06cb7c96a9af9ad4be3cae5.png">
         </a>
      </div>
    </div>

    <!--小总容器每个产品 -->
    <div class="Listfore" ref="Listfore">
      <div class="nihao">
        <LList v-for="(List,index) in Lists" :key="index"></LList>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import LList from '../list/List.vue'
export default {
  data () {
    return {
      time: '',
      Lists: [1, 2, 3, 4, 5, 6, 7, 8],
      flag: false,
      todos: [
        {
          'imgs': 'https://img1.epetbar.com/2016-02/20/10/384c80b530bad17ab90de8f661f65e68.jpg',
          'money': '￥21.9',
          'leave': '省￥10.10'
        },
        {
          'imgs': 'https://img1.epetbar.com/2016-02/20/10/384c80b530bad17ab90de8f661f65e68.jpg',
          'money': '￥21.9',
          'leave': '省￥10.10'
        },
        {
          'imgs': 'https://img1.epetbar.com/2016-02/20/10/384c80b530bad17ab90de8f661f65e68.jpg',
          'money': '￥21.9',
          'leave': '省￥10.10'
        },
        {
          'imgs': 'https://img1.epetbar.com/2016-02/20/10/384c80b530bad17ab90de8f661f65e68.jpg',
          'money': '￥21.9',
          'leave': '省￥10.10'
        },
        {
          'imgs': 'https://img1.epetbar.com/2016-02/20/10/384c80b530bad17ab90de8f661f65e68.jpg',
          'money': '￥21.9',
          'leave': '省￥10.10'
        },
        {
          'imgs': 'https://img1.epetbar.com/2016-02/20/10/384c80b530bad17ab90de8f661f65e68.jpg',
          'money': '￥21.9',
          'leave': '省￥10.10'
        },
        {
          'imgs': 'https://img1.epetbar.com/2016-02/20/10/384c80b530bad17ab90de8f661f65e68.jpg',
          'money': '￥21.9',
          'leave': '省￥10.10'
        },
        {
          'imgs': 'https://img1.epetbar.com/2016-02/20/10/384c80b530bad17ab90de8f661f65e68.jpg',
          'money': '￥21.9',
          'leave': '省￥10.10'
        }
      ]
    }
  },
  mounted () {
    const ul = this.$refs.Listfore.children[0]
    const liWidth = 96
    const count = ul.children.length
    ul.style.width = liWidth * count + 'px'
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.Listfore, {
        scrollX: true
      })
    })
    let time = setInterval(() => {
      if (this.flag === true) {
        clearInterval(time)
      }
      this.timeDown()
    }, 500)
  },
  props: {
    endTime: {
      type: String
    }
  },
  methods: {
    timeDown () {
      const endTime = new Date(this.endTime)
      const nowTime = new Date()
      let leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000)
      let d = parseInt(leftTime / (24 * 60 * 60))
      let h = this.formate(parseInt(leftTime / (60 * 60) % 24))
      let m = this.formate(parseInt(leftTime / 60 % 60))
      let s = this.formate(parseInt(leftTime % 60))
      if (leftTime <= 0) {
        this.flag = true
        this.$emit('time-end')
      }
      this.time = `${d}天${h}小时${m}分${s}秒`
    },
    formate (time) {
      if (time >= 10) {
        return time
      } else {
        return `0${time}`
      }
    }
  },
  components: {
    LList
  }
}
</script>

<style>
.surprise{
  position: relative
}
.surpriseTitle{
  overflow: hidden;
  padding: 10px;
}
.title{
  float:left
}
.title img{
  heght:24px;
  margin-left:-20px
}
.text{
  float:left;
  margin-top:1px;
  font-size:13px;
  margin-left:10px
}
.time{
  margin-left:5px;
  text-align:center
}
.more{
  position:absolute;
  top:2px;
  right:-8px;
}
.more a img{
  display:block;
  margin:0 0 0 auto;
  width:50%
}

</style>
