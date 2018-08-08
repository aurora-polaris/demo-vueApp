
<template>
  <div class="wrap">
    <div class="rightbox bgfff">
      <div class="sort-detail-list">
        <div class="sort-recom bgfff">
          <div class="hot-recom bbtf3">
            <a href="javascript:;" class="title c999 db ft12 pl5">热门分类</a>
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
                <a href="https://wap.epet.com/goodslist/10.html?fw=0" class="db">
                  <div class="rela loadimg-nofixed">
                    <img class="w100 image" src="https://img2.epetbar.com/nowater/2017-05/26/10/2eeb97d6268f555de24ec370fd0de2ad.jpg?x-oss-process=style/fill&amp;$1=300&amp;$2=300" lazy="loaded">
                  </div>
                  <p class="ftc ft13 mt10 c333">磨牙洁齿</p>
                </a>
              </li>
              <li class="fl mt10">
                <a href="https://wap.epet.com/goodslist/756.html?fw=0" class="db">
                    <div class="rela loadimg-nofixed">
                    <img class="w100 image" src="https://img2.epetbar.com/nowater/2016-08/20/14/8095e54e9414a06705acb7471eac7629.jpg?x-oss-process=style/fill&amp;$1=300&amp;$2=300" lazy="loaded">
                    </div>
                    <p class="ftc ft13 mt10 c333">肠胃调理</p>
                    </a>
              </li>
            <li class="fl mt10">
              <a href="https://wap.epet.com/goodslist/7.html?fw=0" class="db">
                <div class="rela loadimg-nofixed">
                  <img class="w100 image" src="https://img2.epetbar.com/nowater/2016-07/21/14/0f972761c08a37c8baff88fa9302053d.jpg?x-oss-process=style/fill&amp;$1=300&amp;$2=300" lazy="loaded">
                </div>
                <p class="ftc ft13 mt10 c333">进口狗粮</p>
              </a>
            </li>
            <li class="fl mt10">
              <a href="https://wap.epet.com/goodslist/521.html?fw=0" class="db">
                <div class="rela loadimg-nofixed">
                  <img class="w100 image" src="https://img2.epetbar.com/nowater/cates/2014-03/24/81f4ac6b5b31143c056046bd9dc14b9e.jpg?x-oss-process=style/fill&amp;$1=300&amp;$2=300" lazy="loaded">
                </div>
                <p class="ftc ft13 mt10 c333">体内驱虫</p>
              </a>
            </li>
            <li class="fl mt10">
              <a href="https://wap.epet.com/goodslist/413.html?fw=0" class="db">
                <div class="rela loadimg-nofixed">
                  <img class="w100 image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&amp;$1=300&amp;$2=300" lazy="loaded">
                </div>
                <p class="ftc ft13 mt10 c333">强化免疫</p>
              </a>
            </li>
            <li class="fl mt10">
              <a href="https://wap.epet.com/goodslist/3555.html?fw=0" class="db">
                <div class="rela loadimg-nofixed">
                  <img class="w100 image" src="https://img2.epetbar.com/nowater/2017-05/12/10/f38b8a4245c34c33061d04ad1e8009dd.jpg?x-oss-process=style/fill&amp;$1=300&amp;$2=300" lazy="loaded">
                </div>
                <p class="ftc ft13 mt10 c333">国产狗粮</p>
              </a>
            </li>
  -->
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
          'link': 'https://wap.epet.com/goodslist/10.html?fw=0',
          'imgs': 'https://img2.epetbar.com/nowater/2017-05/26/10/2eeb97d6268f555de24ec370fd0de2ad.jpg?x-oss-process=style/fill&$1=300&$2=300',
          'names': '磨牙洁齿'
        },
        {
          'link': 'https://wap.epet.com/goodslist/756.html?fw=0',
          'imgs': 'https://img2.epetbar.com/nowater/2016-08/20/14/8095e54e9414a06705acb7471eac7629.jpg?x-oss-process=style/fill&$1=300&$2=300',
          'names': '肠胃调理'
        },
        {
          'link': 'https://wap.epet.com/goodslist/7.html?fw=0',
          'imgs': 'https://img2.epetbar.com/nowater/2016-07/21/14/0f972761c08a37c8baff88fa9302053d.jpg?x-oss-process=style/fill&$1=300&$2=300',
          'names': '进口狗粮'
        },
        {
          'link': 'https://wap.epet.com/goodslist/521.html?fw=0',
          'imgs': 'https://img2.epetbar.com/nowater/cates/2014-03/24/81f4ac6b5b31143c056046bd9dc14b9e.jpg?x-oss-process=style/fill&$1=300&$2=300',
          'names': '体内驱虫'
        },
        {
          'link': 'https://wap.epet.com/goodslist/413.html?fw=0',
          'imgs': 'https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300',
          'names': '强化免疫'
        },
        {
          'link': 'https://wap.epet.com/goodslist/3555.html?fw=0',
          'imgs': 'https://img2.epetbar.com/nowater/2017-05/12/10/f38b8a4245c34c33061d04ad1e8009dd.jpg?x-oss-process=style/fill&$1=300&$2=300',
          'names': '国产狗粮'
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
.bbtf3{
    border-top:1px solid #dadcde;
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
    margin-left:10px
}
.title{
    margin-top:30px;
    font-size:13px;
}
</style>
