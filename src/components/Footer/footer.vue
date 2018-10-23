<template>
  <div class="footer">
    <ul>
      <li><router-link to="/Home">主页</router-link></li>
      <li><router-link to="/Find">发现</router-link></li>
      <li><router-link to="/Order">订单</router-link></li>
      <li><router-link to="/Mine">我的</router-link></li>
    </ul>

  </div>

</template>

<script>
  export default {
    name: 'footer'
  }
</script>

<style scoped>
  *{margin: 0 auto;padding: 0}
.footer{
  width: 100%;
  height: 40px;
  background: skyblue;
  line-height: 40px;
  position :fixed;
  z-index :100;
  left :0;
  right :0;
  bottom :0;
}
  .footer ul li{
    list-style: none;
    text-decoration: none;
    float: left;
    width: 25%;
    text-align: center;
  }
  .footer ul li:hover{
    background: salmon;
  }
</style>
