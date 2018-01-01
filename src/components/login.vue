<template>
  <div class="comtainer">
    <navtop></navtop>
    <div class="page-container">
      <h1>登录(Login)</h1>
      <input type="text" v-model="name" name="username" class="username" placeholder="请输入您的用户名！">
      <br>
      <input type="password" v-model="pwd" name="password" class="password" placeholder="请输入您的用户密码！">
      <br>
      <button @click="isLogin" class="submit_button">登录</button>
    </div>
  </div>
</template>


<script>
  import res from '@/api/index'

  export default {
    name: "login",
    data() {
      return {
        name: '',
        pwd: '',
        error: '',
        change: ''
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      isLogin: function () {
        res.login(this.name, this.pwd)
      },
    },
    mounted() {
      this.$store.commit("showPage", "登录");
    }
  }
</script>
<style scoped>


  .comtainer {
    height: 100%;
    background: -moz-linear-gradient(top, #fff, rgba(8, 143, 255, 0.6));
    background: -webkit-linear-gradient(top, #fff, rgba(8, 143, 255, 0.6));
    text-align: center;
  }

  input {
    font-family: Microsoft YaHei, Segoe UI, Tahoma, Arial, Verdana, sans-serif;
    text-decoration: none;
    width: 300px;
    height: 42px;
    margin-top: 25px;
    padding: 0 15px;
    background: rgba(45, 45, 45, .15);
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, .15);
    font-size: 14px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .1);
    -webkit-transition: all .2s;
    outline: none;
    font-weight: 100;
    color: rgb(0, 0, 0);
    -webkit-appearance: textfield;
    -webkit-rtl-ordering: logical;
    user-select: text;
    cursor: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0;
    display: inline-block;
    text-align: start;
  }

  button {
    font-size: 16px;
    font-family: Microsoft YaHei, Segoe UI, Tahoma, Arial, Verdana, sans-serif;
    text-decoration: none;
    width: 200px;
    cursor: pointer;
    height: 44px;
    margin-top: 25px;
    padding: 0;
    background: #ef4300;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    border: 1px solid #ff730e;
    -moz-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, .25) inset, 0 2px 7px 0 rgba(0, 0, 0, .2);
    -webkit-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, .25) inset, 0 2px 7px 0 rgba(0, 0, 0, .2);
    box-shadow: 0 15px 30px 0 rgba(255, 255, 255, .25) inset, 0 2px 7px 0 rgba(0, 0, 0, .2);
    font-weight: 700;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .1);
    -o-transition: all .2s;
    -moz-transition: all .2s;
    -webkit-transition: all .2s;
    transition: all .2s;
    align-items: flex-start;
    text-align: center;
    box-sizing: border-box;
    text-rendering: auto;
    display: inline-block;
  }
</style>
