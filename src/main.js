import Vue from 'vue';
import './assets/css/reset.less';
import App from './App.vue';
import router from './router';
import store from './store/store';
import mixins from './common/mixin';
import { ripple } from './components/index';

Vue.mixin(mixins)
  .directive('ripple', ripple);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
