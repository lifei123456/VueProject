<template>
  <div class="comtainer">
    <navtop></navtop>
    <h1>修改密码</h1>
    <span>用户名: &nbsp;</span>
    <input title="用户名" type="text" disabled="disabled" v-model="user.username">
    <br>
    <span>密&nbsp;&nbsp; 码: &nbsp;</span>
    <input title="密码" type="password" :disabled="isActive" v-model="password">
    <br>&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="button" @click="changePsw()" value="修改">{{state_init}}</button>
  </div>
</template>

<script>
  import changePwd from '@/api/index'

  export default {
    name: "changePsw",
    data() {
      return {
        username: 'name',
        password: '',
        isActive: true,
        state_init: '修改密码',
      }
    },
    computed: {
      user() {
        this.password = this.$store.state.user.password;
        return this.$store.state.user;
      }
    },
    methods: {
      changePsw: function () {
        if (!this.isActive) {
          changePwd.changePwd(this.password)
        }
        this.isActive = !this.isActive;
        this.state_init = this.isActive ? '修改密码' : '确定';
      },
    },
    mounted() {
      this.$store.commit("showPage", "修改密码");
    }
  }
</script>
<style scoped>
  .comtainer {
    background: -moz-linear-gradient(top, #fff, rgba(8, 143, 255, 0.6));
    background: -webkit-linear-gradient(top, #fff, rgba(8, 143, 255, 0.6));
    text-align: center;
    height: 100%;
    color: #000;
  }

  input:disabled {
    border: 1px solid #DDD;
    background-color: #F5F5F5;
    color: #ACA899;
  }

  input {
    font-family: Microsoft YaHei, Segoe UI, Tahoma, Arial, Verdana, sans-serif;
    text-decoration: none;
    width: 50%;
    max-width: 700px;
    min-width: 250px;
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
    font-size: 18px;
    font-family: Microsoft YaHei, Segoe UI, Tahoma, Arial, Verdana, sans-serif;
    text-decoration: none;
    width: 25%;
    min-width: 170px;
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

  h1 {
    margin: 0;
    padding-top: 10px;
  }
</style>
