// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import ajax from './asyncAjax'
import 'element-ui/lib/theme-default/index.css'

const baseIp = 'http://10.0.92.15:3000/'
let $http = function (method, url, data) {
  return ajax({
    method: method,
    url: baseIp + url,
    data: data,
    async: true
  })
}
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = $http
Vue.prototype.imgUrl = baseIp + 'images/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
