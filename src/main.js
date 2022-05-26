import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import api from './api/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import installElementPlus from './plugins/element'
import './assets/css/icon.css'
// import './api/mock.js'
// import '../src/mock/index'

const app = createApp(App)
installElementPlus(app)
app
    .use(store)
    .use(router)
    .use(VueAxios, axios)
    .provide('axios', app.config.globalProperties.axios)
    .mount('#app')
