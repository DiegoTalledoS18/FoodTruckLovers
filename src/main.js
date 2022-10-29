import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

import "primevue/resources/themes/saga-blue/theme.css"       //theme
import "primevue/resources/primevue.min.css"                 //core css
import "primeicons/primeicons.css"                           //icons

const app = createApp(App)

import ToastService from 'primevue/toastservice';
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import TabMenu from 'primevue/tabmenu';
import Image from 'primevue/image';


app.use(router)
app.use(PrimeVue);
app.use(ToastService);

app.component("pv-button",Button)
app.component("pv-toolbar",Toolbar)
app.component("pv-card",Card)
app.component("pv-input-text",InputText)
app.component("pv-toast",Toast)
app.component("pv-tab-menu",TabMenu)
app.component("pv-image",Image)

app.mount('#app')
