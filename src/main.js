import './assets/main.css'
import './styles.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import Lara from './presets/lara';

import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';


const app = createApp(App)

//Components
app.component("Card", Card)
app.component("Dialog", Dialog)
app.component("Button", Button)
app.component("InputText", InputText)
app.component("InputGroup", InputGroup)
app.component("InputGroupAddon", InputGroupAddon)



app.use(PrimeVue, {
    unstyled: true,
    pt: Lara
});

app.mount('#app');