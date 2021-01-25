import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/New',
    name: 'New',
    component: () => import(/* webpackChunkName: "about" */ '../views/New.vue')
    
  },
  {
    path: '/Task/:id',
    name: 'Task',
    component: () => import(/* webpackChunkName: "about" */ '../views/Task.vue')
  
  },
  {
    path: '/Tasks',
    name: 'Tasks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Tasks.vue'),
    alias : '/'
  },
  { 
    path : '/:notFound(.*)',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
