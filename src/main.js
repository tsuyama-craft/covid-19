import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

const app = createApp(App)

app.config.devtools = true
app.use(store).use(router).mount('#app')