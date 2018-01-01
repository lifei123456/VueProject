<template>
  <section v-show="user">
    <!-- 这里的user是从下面JavaScript的computed的user()方法中得到的。 -->
    <div class="msg">
      <navtop></navtop>
      <h3>{{user.username}} 的留言板</h3>
      <div class="msg_head" v-for="(item, index) in from">
        <span>from: {{item}}</span>
        <span>{{time[index]}}</span>
        <br>
        <div class="msg_content">
          内容:
          <p>{{message[index]}} </p>
        </div>
      </div>
      <span>{{tips}}</span>
    </div>
  </section>
</template>
<script>
  import msgBoard from '@/api/index'

  export default {
    name: 'msgBoard',
    data: function () {
      return {
        id: "",
        from: [],
        time: [],
        message: [],
        tips: ""
      }

    },
    computed: {
      user() {
        this.id = this.$store.state.user.id;
        //因为在main.js中已经全局注册了store，所以这里直接用this.$直接使用。
        return this.$store.state.user
      }
    },
    mounted() {
      let thisSelf = this;
      msgBoard.getRes('/msgBoard', "留言板").then(
        function (result) {
          if (result !== "") {
            for (let j = 0; j < result.data[0].msgdt.length; j++) {
              thisSelf.$set(thisSelf.from, j, result.data[0].msgdt[j].from);
              thisSelf.$set(thisSelf.time, j, result.data[0].msgdt[j].time);
              thisSelf.$set(thisSelf.message, j, result.data[0].msgdt[j].msg);
            }
          } else {
            thisSelf.tips = "暂无数据"
          }

        })
    }
  }
</script>
<style scoped>
  section {
    height: 100%;
  }

  .msg {
    min-height: 100%;
    width: 100%;
    /*background: #cac2c2;*/
    background: -moz-linear-gradient(top, #fff, rgba(8, 143, 255, 0.6));
    background: -webkit-linear-gradient(top, #fff, rgba(8, 143, 255, 0.6));
    color: #000;
    text-align: center;
    padding-bottom: 20px;
  }

  .msg_head {
    text-align: left;
    padding: 20px 20px;
    background: #fff;
    width: 80%;
    margin: 20px 10%;
    border-radius: 5px;
  }

  span {
    padding: 0 10px 0 0;

  }

  .msg_content {
    margin-top: 10px;
  }

  p {
    padding-left: 3em;
  }

  h3 {
    margin-top: 0;
    text-shadow: 5px -5px black, 4px -4px white;
    font-weight: bold;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text
  }
</style>
