<template>
  <div class="home">
<!--老写法    -->
    <!--<div class="header">-->
        <!--<span class="header-search">查找</span>-->
        <!--<span class="header-title">地址</span>-->
        <!--<span class="header-login">登陆/注册</span>-->
    <!--</div>-->

    <!--新插槽slot-->
    <header-top title="成都">
      <span class="header-search" slot="left">查找</span>
      <span class="header-search" slot="right">登录/注册</span>
    </header-top>

<div class="clear"></div>
<!--Nav部分    -->
    <div class="nav">
      <div class="nav-img"><img src="../../components/ShopList/images/1.jpg"></div>
      <div class="nav-img"><img src="../../components/ShopList/images/2.jpg"></div>
      <div class="nav-img"><img src="../../components/ShopList/images/3.jpg"></div>
      <div class="nav-img"><img src="../../components/ShopList/images/4.jpg"></div>
      <div class="nav-img"><img src="../../components/ShopList/images/5.jpg"></div>
      <div class="nav-img"><img src="../../components/ShopList/images/6.jpg"></div>
      <div class="nav-img"><img src="../../components/ShopList/images/7.jpg"></div>
      <div class="nav-img"><img src="../../components/ShopList/images/8.jpg"></div>
    </div>
    <div class="clear"></div>
<!--商家展示部分-->
   <div class="shop-list">
     <span>附近商家</span>
     <!--<div class="shop-list-img">-->
       <!--<img src="../../components/ShopList/shopimg/2.jpg">-->
       <!--<span>20元</span>-->
       <!--<span>配送费:5元</span>-->
       <!--<span>月销量:106</span>-->
     <!--</div>-->
     <!--<div class="shop-list-img">-->
       <!--<img src="../../components/ShopList/shopimg/3.jpg">-->
       <!--<span>20元</span>-->
       <!--<span>配送费:5元</span>-->
       <!--<span>月销量:106</span>-->
     <!--</div>-->
     <!--<div class="shop-list-img">-->
       <!--<img src="../../components/ShopList/shopimg/4.jpg">-->
       <!--<span>20元</span>-->
       <!--<span>配送费:5元</span>-->
       <!--<span>月销量:106</span>-->
     <!--</div>-->
     <!--<div class="shop-list-img">-->
       <!--<img src="../../components/ShopList/shopimg/1.jpg">-->
       <!--<span>20元</span>-->
       <!--<span>配送费:5元</span>-->
       <!--<span>月销量:106</span>-->
     <!--</div>-->
     <!--<div class="shop-list-img">-->
       <!--<img src="../../components/ShopList/shopimg/1.jpg">-->
       <!--<span>20元</span>-->
       <!--<span>配送费:5元</span>-->
       <!--<span>月销量:106</span>-->
     <!--</div>-->
    <shop-list></shop-list>

   </div>
  </div>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from '../../components/ShopList/ShopList'

// import Swiper from 'swiper'
// import 'swiper/dist/css/swiper.min.css'


  export default {
    name: 'Home',
    components: {
      HeaderTop,
      ShopList
    },

  }
</script>
<style scoped>
  .clear{width: 100%;height: 0px;clear: both}
.home{

}
/*头部*/
.header{
  height: 30px;
  background: skyblue;
}
  .header-search{width: 20%}
  .header-title{width: 50%}
  .header-login{width: 20%}
.header-search,.header-title,.header-login{display: inline-block;background: sandybrown;text-align: center;height: 30px;line-height: 30px}




/*nav图片*/
.nav{width: 100%;height:auto;margin-top: 20px;}
.nav-img img{width: 90px;float: left;}

  /*附近商家*/
  .shop-list{background: sandybrown}
  .shop-list-img img{width: 130px;height: 100px;}
</style>
