import { createRouter, createWebHistory } from 'vue-router'
import Component1 from './components/Component1.vue'
import Component2 from './components/Component2.vue'
import Component3 from './components/Component3.vue'

const routes = [
  {
    path: '/1',
    name: 'Component1',
    component: Component1
  },
  {
    path: '/2',
    name: 'Component2',
    component: Component2
  },
  {
    path: '/3',
    name: 'Component3',
    component: Component3
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

