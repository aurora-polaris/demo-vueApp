
<template>
  <div class="wrap">
    <div class="rightbox bgfff">
      <div class="sort-detail-list">
        <div class="sort-recom bgfff">
          <div class="hot-recom bbtf3">
            <a href="javascript:;" class="title c999 db ft12 pl5">狗狗主粮</a>
            <ul class="clearfix">
              <li class="fl mt10" v-for="(item, index) in classifications" :key="index">
                <a :href="item.link" class="db">
                  <div class="rela loadimg-nofixed">
                    <img class="w100 image" :src="item.imgs" lazy="loaded">
                  </div>
                  <p class="ftc ft13 mt10 c333">{{item.names}}</p>
                </a>
              </li>
              <!--
              <li class="fl mt10">
                <a href="https://wap.epetht.com/goodslist/epethk_103554.html?fw=0" class="db">
                  <div class="rela loadimg-nofixed">
                    <img class="w100 image" src="http://img.epetht.com/nowater/cates/2014-03/24/3512594b71a2efd14b5c5925848d2e5a.jpg" lazy="loaded">
                  </div>
                  <p class="ftc ft13 mt10 c333">处方粮</p>
                </a>
              </li>
              <li class="fl mt10">
                <a href="https://wap.epetht.com/goodslist/epethk_104307.html?fw=0" class="db">
                  <div class="rela loadimg-nofixed">
                    <img class="w100 image" src="http://img.epetht.com/nowater/2017-09/01/16/4e3455a75bc8d75be71816e51b917103.jpg" lazy="loaded">
                  </div>
                  <p class="ftc ft13 mt10 c333">冻干粮</p>
                </a>
              </li>
              <li class="fl mt10">
                 <a href="https://wap.epetht.com/goodslist/epethk_104311.html?fw=0" class="db">
                  <div class="rela loadimg-nofixed">
                    <img class="w100 image" src="http://img.epetht.com/nowater/2017-09/21/20/95ef871eb30d94dda553b3d728ffdab2.png" lazy="loaded">
                  </div>
                  <p class="ftc ft13 mt10 c333">幼犬粮</p>
                </a>
              </li>
              <li class="fl mt10">
                <a href="https://wap.epetht.com/goodslist/epethk_104312.html?fw=0" class="db">
                  <div class="rela loadimg-nofixed">
                    <img class="w100 image" src="http://img.epetht.com/nowater/2017-09/21/20/1a512b46eb283c302c194ad73d59d5b8.jpg" lazy="loaded">
                  </div>
                  <p class="ftc ft13 mt10 c333">成犬粮</p>
                </a>
              </li>
              <li class="fl mt10">
                <a href="https://wap.epetht.com/goodslist/epethk_104313.html?fw=0" class="db">
                  <div class="rela loadimg-nofixed">
                     <img class="w100 image" src="http://img.epetht.com/nowater/2017-09/21/20/30796efbf55685efc2b93e34ce51eb4c.jpg" lazy="loaded">
                  </div>
                  <p class="ftc ft13 mt10 c333">全犬粮</p>
                </a>
              </li>
              <li class="fl mt10">
                <a href="https://wap.epetht.com/goodslist/epethk_104314.html?fw=0" class="db">
                  <div class="rela loadimg-nofixed">
                    <img class="w100 image" src="http://img.epetht.com/nowater/2017-09/21/20/760d407f3934b1e8fc788f089ff8daea.jpg" lazy="loaded">
                  </div>
                  <p class="ftc ft13 mt10 c333">老犬粮</p>
                </a>
              </li>
              -->
            </ul>
          </div>
          <div class="hot-recom bbtf3">
            <a href="javascript:;" class="title c999 db ft12 pl5">狗狗主粮</a>
            <ul class="clearfix">
            <li class="fl mt10" v-for="(item, index) in classifications" :key="index">
                <a :href="item.link" class="db">
                  <div class="rela loadimg-nofixed">
                    <img class="w100 image" :src="item.imgs" lazy="loaded">
                  </div>
                  <p class="ftc ft13 mt10 c333">{{item.names}}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      classifications: [
        {
          'link': 'https://wap.epetht.com/goodslist/epethk_103554.html?fw=0',
          'imgs': 'http://img.epetht.com/nowater/cates/2014-03/24/3512594b71a2efd14b5c5925848d2e5a.jpg',
          'names': '处方粮'
        },
        {
          'link': 'https://wap.epetht.com/goodslist/epethk_104307.html?fw=0',
          'imgs': 'http://img.epetht.com/nowater/2017-09/01/16/4e3455a75bc8d75be71816e51b917103.jpg',
          'names': '冻干粮'
        },
        {
          'link': 'https://wap.epetht.com/goodslist/epethk_104311.html?fw=0',
          'imgs': 'http://img.epetht.com/nowater/2017-09/21/20/95ef871eb30d94dda553b3d728ffdab2.png',
          'names': '幼犬粮'
        },
        {
          'link': 'https://wap.epetht.com/goodslist/epethk_104312.html?fw=0',
          'imgs': 'http://img.epetht.com/nowater/2017-09/21/20/1a512b46eb283c302c194ad73d59d5b8.jpg',
          'names': '成犬粮'
        },
        {
          'link': 'https://wap.epetht.com/goodslist/epethk_104313.html?fw=0',
          'imgs': 'http://img.epetht.com/nowater/2017-09/21/20/30796efbf55685efc2b93e34ce51eb4c.jpg',
          'names': '全犬粮'
        },
        {
          'link': 'https://wap.epetht.com/goodslist/epethk_104314.html?fw=0',
          'imgs': 'http://img.epetht.com/nowater/2017-09/21/20/760d407f3934b1e8fc788f089ff8daea.jpg',
          'names': '老犬粮'
        }
      ]
    }
  }
}
</script>

<style scoped>
.rightbox{
    margin-left:75px;
}
.bgff{
    background:#fff
}
.sort-detail-list, .hot-recom{
    padding:5px 5px 20px;
    width: 280px;
}
.f12{
    font-size:12px
}
.db{
    display:block;
}
.c999{
    color:#999
}
.p15{
    padding-left:5px;
}
.mt10, .mt{
    margin-top:10px
}
a{
    text-decoration:none;
    color: #333;
}
.clearfix li{
    width:33.3%;
    padding:0 5px;
    position: relative;
    float: left;
    margin-left: -12%;
    margin-right: 16px;
    list-style:none
}
.f1{
    float:left
}
.loadimg-nofixed{
    background: url(../image/default-epet2.jpg) no-repeat center center #f4f4f4;
    background-size: 120px auto;
    position: relative;
    padding-top: 100%;
}
.image{
    top:0;
    left:0;
    position:absolute;
}
img{
    border:0;
    vertical-align:middle
}
.w100{
    width:100%
}
.hot-recom li p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 20px;
    color:#333;
    font-size:13px;
    margin-left:20px
}
.title{
    margin-top:30px;
    font-size:13px;
}
</style>
