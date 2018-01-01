import Vue from 'vue'
import App from './App'
import router from './router'
import nav from '@/components/nav'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from '@/vuex/store'

//bootstrap && jQuery
import './assets/js/jquery.min.js'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'

Vue.component('navtop', nav);//全局组件
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(router);

// 全局导航钩子
router.beforeEach((to, from, next) => {

  if (to.meta.requireAuth) {
    if (!isEmptyObject(store.state.user)) {
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: '/login'}  // 将跳转的路由path作为参数跳转到该路由
      })
    }
  }
  else {
    next();
  }
});

//判断object是否为空
function isEmptyObject(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});
