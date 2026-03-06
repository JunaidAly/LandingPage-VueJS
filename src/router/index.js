import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import PlansPage from '../pages/PlansPage.vue'
import FloorPlansPage from '../pages/FloorPlansPage.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/plans', component: PlansPage },
  { path: '/floorplans', component: FloorPlansPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})
