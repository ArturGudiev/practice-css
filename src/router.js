import { createRouter, createWebHistory } from 'vue-router'
import Component1 from './components/Component1.vue'
import Component2 from './components/Component2.vue'
import Component3 from './components/Component3.vue'
import G_1 from './components/grid-questions/G_1.vue'
import G_1a from './components/grid-questions/G_1a.vue'
import DynamicComponent from './components/DynamicComponent.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: { template: '<div></div>' }
  },
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
  },
  {
    path: '/g1',
    name: 'ComponentG1',
    component: G_1
  },
  {
    path: '/g1a',
    name: 'ComponentG1a',
    component: G_1a
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'DynamicRoute',
    component: DynamicComponent
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

