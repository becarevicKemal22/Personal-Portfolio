import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'
import './assets/tailwind.css'
import HomePage from "@/pages/HomePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomePage}
    ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
