import axios from 'axios'
import store from '@/vuex/store'
import router from '@/router/index'

axios.defaults.timeout = 3000;//超时时间
axios.defaults.baseURL = 'http://localhost:8888';//后台地址

export default {

  //根据URL及当前页面获取数据及更改当前页面标注
  getRes(url, page) {
    store.commit("showPage", page);
    return axios.get(url).then((response) => {
      if (response.data !== null && Object.keys(response.data).length > 0) {
        return response;
      } else {
        return ""
      }
    }).then((error) => this.error = error);

  },

  //登录验证
  login(id, pwd) {
    axios.get('/login?id=' + id + '&password=' + pwd).then((response) => {
      //这里先判断一下后台返回的是否为空值，如果不是然后提交后台返回的值。
      if (response.data !== null && Object.keys(response.data).length > 0) {
        store.commit('isLogin', response.data);//修改登录状态
        store.commit("changeLogin", "重新登录");
        router.push({path: 'home'})
      } else {
        alert('请输入正确的用户名和密码！！！');
      }
    }).then((error) => this.error = error)

  },

  //修改密码
  changePwd(pwd) {
    axios.post('/change?' + pwd).then((response) => {
      //这里在isLogin方法中先判断一下后台返回的是否为空值，如果不是然后提交后台返回的值。
      store.commit('isLogin', "");
      router.push({path: 'login'});
      alert("success");
    }).then((error) => this.error = error);
  }
}
