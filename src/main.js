import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
import store from './store'
import './assets/css/icon.css'
// import installElementPlus from './plugins/element'


const app = createApp(App)
// installElementPlus(app)
app.use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
