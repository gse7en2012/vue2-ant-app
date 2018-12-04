import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import Button from 'ant-design-vue/lib/button';
// import Layout from 'ant-design-vue/lib/layout';
import 'ant-design-vue/dist/antd.less';
import '@/assets/global.less';

import Antd from 'ant-design-vue'
// Vue.component(Button.name, Button)
// Vue.use(Button).use(Layout);
Vue.use(Antd);

import VueProgressBar from 'vue-progressbar';

Vue.use(VueProgressBar, {
	color: 'rgb(83, 83, 179)',
	failedColor: 'red',
	height: '2px'
})

import ECharts from 'vue-echarts/components/ECharts.vue';
import pinkTheme from './theme/pink.json';
ECharts.registerTheme('pink', pinkTheme);


Vue.component('v-chart', ECharts);

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
