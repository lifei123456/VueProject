<template>
  <div>
    <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <p class="navbar-brand">{{ pageNow }}</p>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/home"><a href="javascript:void(0)">Home</a></router-link>
            </li>
            <li>
              <router-link to="/course"><a href="javascript:void(0)">课表</a></router-link>
            </li>
            <li>
              <router-link to="/msgBoard"><a href="javascript:void(0)">留言板</a></router-link>
            </li>
            <li>
              <router-link to="/changePsw"><a href="javascript:void(0)">修改密码</a></router-link>
            </li>
            <li @click="reLogin">
              <router-link to="/"><a href="javascript:void(0)">{{change}}</a></router-link>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </div>
</template>
<script>
  export default {
    name: "nav",
    data() {
      return {
        msg: ""
      }
    },
    computed: {
      pageNow() {
        return this.$store.state.pageNow;
      },
      change() {
        return this.$store.state.login;
      },
    },
    methods: {
      reLogin() {
        this.$store.commit('isLogin', "");
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar {
    margin-bottom: 0;
  }
</style>
