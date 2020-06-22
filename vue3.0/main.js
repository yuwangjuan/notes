import {createApp} from 'vue'
import router from './router'
var app = createApp(App);
app.use(router);
app.mount('#app')