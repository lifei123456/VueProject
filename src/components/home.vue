<template>
  <div class="comtainer">
    <navtop></navtop>
    <h1>个人中心</h1>
    <img src="../assets/img/1.jpg" alt="头像">
    <span>学&nbsp;&nbsp; 号: &nbsp;&nbsp;&nbsp;</span>
    <input title="学号" type="text" disabled="disabled" :value="user.id">
    <br>
    <span>用户名: &nbsp;&nbsp;&nbsp;</span>
    <input title="用户名" type="text" disabled="disabled" :value="user.username">
    <br>
    <span>密&nbsp;&nbsp; 码: &nbsp;&nbsp;&nbsp;</span>
    <input title="密码" type="text" disabled="disabled" :value="user.password">
    <br>
    <span>班主任: &nbsp;&nbsp;&nbsp;</span>
    <input title="班主任" type="text" disabled="disabled" :value="user.Headmaster">
    <br>
    <span>职&nbsp;&nbsp; 务: &nbsp;&nbsp;&nbsp;</span>
    <input title="职务" type="text" disabled="disabled" :value="user.work">
    <br>
    <span>入学年份:</span>
    <input title="入学年份" type="text" disabled="disabled" :value="user.entranceTime">
    <br>
    <span>毕业时间:</span>
    <input title="毕业时间" type="text" disabled="disabled" :value="user.graduationTime">
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {}
    },
    computed: {
      user() {
        return this.$store.state.user;
      }
    },
    mounted() {
      this.$store.commit("showPage", "HOME");
    }
  }
</script>
<style scoped>
  .comtainer {
    background: -moz-linear-gradient(top, #fff, rgba(8, 143, 255, 0.6));
    background: -webkit-linear-gradient(top, #fff, rgba(8, 143, 255, 0.6));
    text-align: center;
    height: auto;
    min-height: 100%;
    color: #000;
    padding-bottom: 20px;
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
    margin-top: 10px;
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
    letter-spacing: 15px;
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

  img {
    display: block;
    width: 100px;
    height: 100px;
    margin-left: calc(50% - 50px);
    border-radius: 50px;

  }
</style>
