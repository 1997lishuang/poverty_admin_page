import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control
// axios.defaults.withCredentials = true
Vue.use(ElementUI, { locale })

import iView from 'iview' // 导入组件库

import 'iview/dist/styles/iview.css' // 导入样式

import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(echarts)

Vue.use(iView)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
