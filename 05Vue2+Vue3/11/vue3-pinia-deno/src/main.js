import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

createApp(App).mount('#app')
const pinia = createPinia()
createApp(App).use(pinia).mount('#app')
