<template>
  <div class="login">
    <router-link to="/Mine"><----</router-link>
    <div class="login-title">
      <span class="span-title">联邦速运</span>
    </div>

    <div class="login-way">
      <span class="msg-way" @click="MsgWay">短信登陆</span>
      <span class="psd-way" @click="PsdWay">密码登陆</span>
    </div>
    <!--密码登陆-->
    <div class="login-input-psd" v-show="PsdDisplay">
        <span class="span-input">
             <input type="text" placeholder="手机/邮箱/用户名"/>
        </span>
      <span class="span-input">
             <input type="text" placeholder="密码"/>
        </span>
      <span class="span-input">
             <input type="text" placeholder="验证码"/>
        </span>
    </div>
    <!--短信登陆-->
    <div class="login-input-msg" v-show="MsgDisplay">
        <span class="span-input">
             <input type="text" placeholder="手机号码"/>
        </span>
      <span class="span-input">
             <input type="text" placeholder="短信验证码"/>
        </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    methods:{
      MsgWay(){
        PsdDisplay:false
      },
      PsdWay(){

      }
    },
    data(){
      return{
        PsdDisplay:true,
        MsgDisplay:true
      }
    }
  }
</script>

<style scoped>
.login-title{
  text-align: center;
}
  .span-title{
    font-size:26px;
    font-weight: bold;
    color: seagreen;
  }
  .span-input{
    display: block;
  }
  .login-way{width: 100%;background: slateblue}
  .login-way span{
    width: 20%;
    color: white;
  }
  .msg-way{margin-left: 30%;}
</style>
