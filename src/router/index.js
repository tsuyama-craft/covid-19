import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Mainpage',
    component: () => import('../views/Mainpage.vue')
  },
  {
    path: '/Detailspage',
    name: 'detailspage',
    component: () => import('../views/Detailspage.vue')
  },
  {
    path: '/shisetupage',
    name: 'shisetupage',
    component: () => import('../views/Shisetupage.vue')
  },
  {
    path: '/helppage',
    name: 'helppage',
    component: () => import('../views/Helppage.vue')
  },
  {
    path: '/shisetupage/itiranpage',
    name: 'Shisetu_itiranpage',
    component: () => import('../views/Shisetu_itiranpage.vue'),
    props: true
  },
  {
    path: '/shisetupage/itiran/syousai',
    name: 'Shisetu_syousaipage',
    component: () => import('../views/Shisetu_syousaipage.vue'),
    props: true
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
