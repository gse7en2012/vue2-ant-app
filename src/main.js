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


import ECharts from 'vue-echarts/components/ECharts.vue';
Vue.component('v-chart', ECharts);

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
