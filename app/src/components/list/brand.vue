<template>
  <div class="wrap">
  <ul class="recom">
  <li class="recomli">
    <div class="title">
      <span class="c999">—— 推荐品牌 ——</span>
    </div>
    <div class="list">
      <ul class="clearfix">
        <li class="rela" v-for="(item, index) in classifications" :key="index">
          <a :href="item.link" class="block">
            <div class="img loadimg-nofixed rela">
               <img class="db image" :src="item.imgs" lazy="loaded">
            </div>
            <p class="name">{{item.names}}</p>
            <p class="name ftc12 c999">{{item.countrys}}</p>
          </a>
        </li>
        <!--
        <li class="rela">
          <a href="https://wap.epet.com/brand/bd14.html?fw=0" class="block">
            <div class="img loadimg-nofixed rela">
               <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&amp;$1=200" lazy="loaded">
            </div>
            <p class="name">冠能</p>
            <p class="name ftc12 c999">美国</p>
          </a>
        </li>
        <li class="rela">
          <a href="https://wap.epet.com/brand/bd725.html?fw=0" class="block">
            <div class="img loadimg-nofixed rela">
               <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2017-08/09/20/64ac5fd97740cb0fab0cfe3eac1d27f7.jpg?x-oss-process=style/waterfall&$1=200" lazy="loaded">
            </div>
            <p class="name">ZIWI Peak</p>
            <p class="name ftc12 c999">新西兰</p>
          </a>
        </li>
        <li class="rela">
          <a href="https://wap.epet.com/brand/bd142.html?fw=0" class="block">
            <div class="img loadimg-nofixed rela">
               <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2013-01/28/87feaa80f9fbed84c37a7b07da6324a1.jpg?x-oss-process=style/waterfall&$1=200" lazy="loaded">
            </div>
            <p class="name">原始猎食渴望</p>
            <p class="name ftc12 c999">加拿大</p>
          </a>
        </li>
        <li class="rela">
          <a href="https://wap.epet.com/brand/bd1207.html?fw=0" class="block">
            <div class="img loadimg-nofixed rela">
               <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-08/12/16/4c37fc2c6578742b2a7747c135c5aef4.jpg?x-oss-process=style/waterfall&$1=200" lazy="loaded">
            </div>
            <p class="name">麦高臣</p>
            <p class="name ftc12 c999">美国</p>
          </a>
        </li>
        <li class="rela">
          <a href="https://wap.epet.com/brand/bd829.html?fw=0" class="block">
            <div class="img loadimg-nofixed rela">
               <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-08/12/16/276527f25e9151ef48b0b8d2dba79d29.jpg?x-oss-process=style/waterfall&$1=200" lazy="loaded">
            </div>
            <p class="name">谷登</p>
            <p class="name ftc12 c999">中国</p>
          </a>
        </li>
        <li class="rela">
          <a href="https://wap.epet.com/brand/bd853.html?fw=0" class="block">
            <div class="img loadimg-nofixed rela">
               <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/92fbaaa1260480fd9f97fa63ccd1fc7b.jpg?x-oss-process=style/waterfall&$1=200" lazy="loaded">
            </div>
            <p class="name">爱喜雅</p>
            <p class="name ftc12 c999">日本</p>
          </a>
        </li>
        <li class="rela">
          <a href="https://wap.epet.com/brand/bd830.html?fw=0" class="block">
            <div class="img loadimg-nofixed rela">
               <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2015-10/17/12/d9e05c4a2d35c88ffee0dcec98fba6a4.jpg?x-oss-process=style/waterfall&$1=200" lazy="loaded">
            </div>
            <p class="name">MAG</p>
            <p class="name ftc12 c999">美国</p>
          </a>
        </li>
        <li class="rela">
          <a href="https://wap.epet.com/brand/bd19.html?fw=0" class="block">
            <div class="img loadimg-nofixed rela">
               <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/f439e0dc22df3f6c5bc8919b8d9e5c82.jpg?x-oss-process=style/waterfall&$1=200" lazy="loaded">
            </div>
            <p class="name">卡比</p>
            <p class="name ftc12 c999">美国</p>
          </a>
        </li>
        -->
      </ul>
    </div>
    </li>
    <split></split>
    <li class="recomli">
      <div class="title">
      <span class="c999">—— 主粮品牌 ——</span>
    </div>
    <div class="list">
      <ul class="clearfix">
        <li class="rela" v-for="(item, index) in classifications" :key="index">
          <a :href="item.link" class="block">
            <div class="img loadimg-nofixed rela">
               <img class="db image" :src="item.imgs" lazy="loaded">
            </div>
            <p class="name">{{item.names}}</p>
            <p class="name ftc12 c999">{{item.countrys}}</p>
          </a>
        </li>
      </ul>
    </div>
    </li>
  </ul>
  </div>
</template>
<script>
import split from './split.vue'
export default {
  data () {
    return {
      classifications: [
        {
          'link': 'https://wap.epet.com/brand/bd14.html?fw=0',
          'imgs': 'https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200',
          'names': '冠能',
          'countrys': '美国'
        },
        {
          'link': 'https://wap.epet.com/brand/bd725.html?fw=0',
          'imgs': 'https://img2.epetbar.com/nowater/brand_logo/2017-08/09/20/64ac5fd97740cb0fab0cfe3eac1d27f7.jpg?x-oss-process=style/waterfall&$1=200',
          'names': 'ZIWI',
          'countrys': '新西兰'
        },
        {
          'link': 'https://wap.epet.com/brand/bd142.html?fw=0',
          'imgs': 'https://img2.epetbar.com/nowater/brand_logo/2013-01/28/87feaa80f9fbed84c37a7b07da6324a1.jpg?x-oss-process=style/waterfall&$1=200',
          'names': '原始猎食',
          'countrys': '加拿大'
        },
        {
          'link': 'https://wap.epet.com/brand/bd1207.html?fw=0',
          'imgs': 'https://img2.epetbar.com/nowater/brand_logo/2016-08/12/16/4c37fc2c6578742b2a7747c135c5aef4.jpg?x-oss-process=style/waterfall&$1=200',
          'names': '麦高臣',
          'countrys': '美国'
        },
        {
          'link': 'https://wap.epet.com/brand/bd829.html?fw=0',
          'imgs': 'https://img2.epetbar.com/nowater/brand_logo/2016-08/12/16/276527f25e9151ef48b0b8d2dba79d29.jpg?x-oss-process=style/waterfall&$1=200',
          'names': '谷登',
          'countrys': '中国'
        },
        {
          'link': 'https://wap.epet.com/brand/bd853.html?fw=0',
          'imgs': 'https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/92fbaaa1260480fd9f97fa63ccd1fc7b.jpg?x-oss-process=style/waterfall&$1=200',
          'names': '爱喜雅',
          'countrys': '日本'
        },
        {
          'link': 'https://wap.epet.com/brand/bd830.html?fw=0',
          'imgs': 'https://img2.epetbar.com/nowater/brand_logo/2015-10/17/12/d9e05c4a2d35c88ffee0dcec98fba6a4.jpg?x-oss-process=style/waterfall&$1=200',
          'names': 'MAG',
          'countrys': '美国'
        },
        {
          'link': 'https://wap.epet.com/brand/bd19.html?fw=0',
          'imgs': 'https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/f439e0dc22df3f6c5bc8919b8d9e5c82.jpg?x-oss-process=style/waterfall&$1=200',
          'names': '卡比',
          'countrys': '美国'
        }
      ]
    }
  },
  components: {
    split
  }
}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing:border-box
}
.recom{
    padding-bottom:15px;
    margin-bottom:10px;
    background:#fff;
    margin-top:25px;
    position:absolute;
    width:97%
}
.recomli{
    list-style:none;
    height:400px
}
  .title{
      padding-top:20px;
      font-size:12px;
      text-align:center
  }
  .c999{
      color:#999
  }
  .list{
      padding:0 5px
  }
  .clearfix, .block, .db{
      display:block;
  }
  .rela{
      list-style:none;
      margin-top: 10px;
      width: 33.33%;
      padding: 0 5px;
      position:relative;
      float:left;
      height:107px
  }
  a{
      color:#333;
      text-decoration:none;
  }
  .list li .img{
    border: 1px solid #e2e2e2;
    text-align: center;
    padding: 50px 10px 10px;
    background: url(./image/default-epet2.jpg) no-repeat center center #fff;
    background-size: 120px auto;
    height:50px;
    width: 90%;
  }
  img{
      margin:10px auto 0;
      height:40px;
      right:0;
      position:absolute;
      top:0;
      left:0;
      vertical-align:middle
  }
  .name{
      height:20px;
      font-size:13px;
      margin-top:5px;
      text-align:center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      position: absolute;
      bottom: 10px;
      margin-left: 33.3%;
  }
  .ftc12{
      font-size:12px;
      top:84%
  }
</style>
