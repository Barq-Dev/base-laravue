import Vue from 'vue'
import vuetify from './vuetify';
import Filepond from './filepond';
import VueSweetalert2 from 'vue-sweetalert2';
import CKEditor from 'ckeditor4-vue';

// @import url('sweetalert2/dist/sweetalert2.min.css'); import in app.scss
const options = {
  confirmButtonColor: '#2196f3',
  cancelButtonColor: '#ff7674',
};
Vue.use(VueSweetalert2, options);

import VueNumber from 'vue-number-animation'
Vue.use(VueNumber)

Vue.use(require('vue-moment'));

import Echo from 'laravel-echo'
window.Pusher = require('pusher-js');
window.Echo = new Echo({
  broadcaster: 'pusher',
  key: process.env.MIX_PUSHER_APP_KEY,
  cluster: process.env.MIX_PUSHER_APP_CLUSTER,
  encrypted: true,
  authEndpoint: '/api/broadcasting/auth',
  auth: {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    },
  },
});

// import plugin
import { TiptapVuetifyPlugin } from 'tiptap-vuetify'
// don't forget to import CSS styles
import 'tiptap-vuetify/dist/main.css'

Vue.use(TiptapVuetifyPlugin, {
  // the next line is important! You need to provide the vuetify Object to this place.
  vuetify, // same as "vuetify: vuetify"
  // optional, default to 'md' (default vuetify icons before v2.0.0)
  iconsGroup: 'md'
})

// import ECharts from 'vue-echarts'
// import 'echarts'
// import { use } from 'echarts/core'

// // import ECharts modules manually to reduce bundle size
// import {
//   CanvasRenderer
// } from 'echarts/renderers'
// import {
//   BarChart, PieChart
// } from 'echarts/charts'
// import {
//   GridComponent,
//   TooltipComponent
// } from 'echarts/components'

// use([
//   CanvasRenderer,
//   BarChart,
//   PieChart,
//   GridComponent,
//   TooltipComponent
// ]);

// register globally (or you can do it locally)
// Vue.component('v-chart', ECharts)
Vue.use(CKEditor)