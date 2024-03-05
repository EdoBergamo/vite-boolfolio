import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Projects from '../components/Projects.vue'
import ProjectDetails from '../components/ProjectDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetails',
    component: ProjectDetails
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;