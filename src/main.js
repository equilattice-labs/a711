import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import '@fontsource-variable/dm-sans'
import '@fontsource-variable/manrope'
import './style.css'
import App from './App.vue'
import Home from './pages/Home.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    {
      path: '/trade',
      component: () => import('./pages/Trade.vue'),
      meta: { title: 'Global markets · Testnet terminal — LATQOR' },
    },
    {
      path: '/learn',
      component: () => import('./pages/Learn.vue'),
      meta: { title: 'Field guide · Mechanics & risk — LATQOR' },
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to) {
    return to.hash ? { el: to.hash, behavior: 'smooth' } : { top: 0 }
  },
})
router.afterEach((to) => {
  document.title = to.meta.title || 'LATQOR — The world moves. Trade your view.'
})
createApp(App).use(router).mount('#app')
