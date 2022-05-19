import { createApp } from 'vue'
import App from './App.vue'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
import store from './store'

const app = createApp(App)

app.use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
