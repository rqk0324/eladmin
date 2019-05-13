import './assets/css/common.css';
import Vue from 'vue';
import App from './App';
import router from './router';
import animate from 'animate.css';
import Vuex from 'vuex';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import echarts from 'echarts';

Vue.prototype.$echarts = echarts;
Vue.use(iView);
Vue.use(Vuex);
Vue.use(animate);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state:{
    boxSmall:false,
  },
  mutations:{
    changeBoxSmall(state,n){
      n<=768?state.boxSmall=true: state.boxSmall=false
    }
  }
});




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
