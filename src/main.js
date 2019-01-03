// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import router from './routes'
import ErrorPage from './components/ErrorPage'


Vue.use(VueResource)
Vue.use(VueRouter)

Vue.config.productionTip = false;

Vue.component('error-page', ErrorPage)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
});
