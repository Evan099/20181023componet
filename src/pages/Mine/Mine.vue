<template>
  <div class="mine">
    <header-top title="我的">

    </header-top>

<!--登录注册    -->
    <div class="login">
        <div class="login-psrsonal">
          头像
        </div>
        <div class="login-title">
          <span>登录/注册</span>
        </div>
        <div class="login-change">
              <router-link to="/Login">---->></router-link>
        </div>
    </div>
  </div>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  export default {
    name: 'Mine',
    components:{HeaderTop}
  }
</script>

<style scoped>
.login{
  width: 100%;
  height: 80px;
  background: seagreen;
}
  .login div{float: left}
  .login-psrsonal{width: 20%;height:100%;background: skyblue}
  .login-title{width: 65%;height:100%;background: seagreen}
  .login-change{width: 15%;height:100%;background: slateblue}
</style>
