<template>
  <div class="wrap">
    <ul>
        <router-link to="/home" > <li class="position1 icon"></li></router-link>
        <router-link to="/list"><li class="position2 icon" ></li></router-link>
        <router-link to="/shoppingcar" ><li class="position3 icon"></li></router-link>
        <router-link to="/mypet" ><li class="position4 icon"></li></router-link>
    </ul>
  </div>
</template>
<script>
export default {}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
body{
    margin: 0;
    padding: 0;
}
ul{
    height: 45px;
    line-height: 45px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 103;
    border-top: 1px solid #e7e7e7;
    padding-bottom: constant(safe-area-inset-bottom);
    box-sizing: content-box;
    background: #fff;
}
ul li{
    list-style:none;
    float: left
}
.icon{
    background:url("img.png") no-repeat;
    background-size: 234px 163px;
    margin: 0 auto;
    height: 40px !important;
    width: 42px !important;
    margin-top: 2px;
}
.position1{
    display: block;
    background-position:0 0;
    margin-right:10%;
    margin-left:10%
}
.position2{
    background-position: -85px -41px;
    display: block;
    margin-right:10%
}
.position5{
    background-position:0 0;
    display: block;
    margin-right:10%
}
.position3{
    background-position: -85px -81px;
   display: block;
   margin-right:10%
}
.position4{
    background-position: -85px -122px;
   display: block;
}
</style>
