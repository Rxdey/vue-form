import Vue from 'vue';
import './assets/css/reset.less';
import App from './App.vue';
import router from './router';
import store from './store/store';
import mixins from './common/mixin';
import transferDom from './components/tool/transfer-dom';
// import rxui from './components/index';

// Vue.use(rxui);
Vue.mixin(mixins);
Vue.directive('transferDom', transferDom);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
