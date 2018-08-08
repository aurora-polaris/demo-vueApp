
<template>
  <div class="wrap">
    <div class="rightbox bgfff">
      <div class="sort-detail-list">
        <div class="sort-recom bgfff">
          <div class="hot-recom bbtf3">
            <a href="javascript:;" class="title c999 db ft12 pl5">清凉消暑</a>
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
          'link': 'https://wap.epetht.com/goodslist/epethk_100010.html?fw=0',
          'imgs': 'http://img.epetht.com/nowater/2017-09/25/10/6cc904e7c60c6ab284879b23a707165b.jpg',
          'names': '磨牙洁齿'
        },
        {
          'link': 'https://wap.epetht.com/goodslist/epethk_100132.html?fw=0',
          'imgs': 'http://img.epetht.com/nowater/2017-09/25/10/8a7ebfc02676be87aa7cf9c51b7e56e5.jpg',
          'names': '肉质零食'
        },
        {
          'link': 'https://wap.epetht.com/goodslist/epethk_100133.html?fw=0',
          'imgs': 'http://img.epetht.com/nowater/2017-09/26/09/059a34335da87c9a79dcab13d197f537.jpg',
          'names': '点心饮料'
        },
        {
          'link': 'https://wap.epetht.com/goodslist/epethk_100135.html?fw=0',
          'imgs': 'http://img.epetht.com/nowater/2017-09/25/10/da871ab8405cbcd339c69b18376720e4.jpg',
          'names': '罐头湿粮'
        },
        {
          'link': 'https://wap.epetht.com/goodslist/epethk_104306.html?fw=0',
          'imgs': 'http://img.epetht.com/nowater/2017-09/25/10/2998780093b613e981521526f9c3f073.jpg',
          'names': '磨牙饼干'
        },
        {
          'link': 'https://wap.epetht.com/goodslist/epethk_104308.html?fw=0',
          'imgs': 'http://img.epetht.com/nowater/2017-09/25/13/734e33cb328f073c22b71d69243c18b9.jpg',
          'names': '冻干零食'
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
