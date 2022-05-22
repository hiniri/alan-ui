import { createApp } from 'vue'
import App from './App.vue'

import '@/styles/main.css'

// 创建 app 实例
const app = createApp(App)
// 创建 根组件 实例
const root = app.mount('#app')

console.log("",app, root)