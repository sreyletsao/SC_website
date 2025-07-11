import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '@/views/ProjectView.vue'
import DonateView from '@/views/DonateView.vue'
import ContactView from '@/views/ContactView.vue'
import GetInvolvedView from '@/views/GetInvolvedView.vue'
import Login from '@/components/Authentication/Login.vue'
import Register from '@/components/Authentication/Register.vue'

// Dashboard Layout & Children
import Dashboard from '@/components/Admin/Dashboard.vue'
import DashboardHome from '@/components/Admin/DashboardHome.vue'
import BoardMember from '@/components/Admin/BoardMember.vue'
import GiftManagement from '@/components/Admin/GiftManagement.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
    { path: '/programs', name: 'projects', component: ProjectView },
    { path: '/donate', name: 'donate', component: DonateView },
    { path: '/getInvolved', name: 'getInvolved', component: GetInvolvedView },
    { path: '/contact', name: 'contact', component: ContactView },
    { path: '/register', name: 'register', component: Register },
    { path: '/login', name: 'login', component: Login },
    {
      path: '/dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'dashboard-home',
          name: 'dashboard-home',
          component: DashboardHome
        },
        {
          path: 'board-member',
          name: 'board-member',
          component: BoardMember
        },
        {
          path: '/gift-management',
          name: 'gift-management',
          component: GiftManagement
        }
      ]
    }
  ]
})

// Route Guards
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  if (to.meta.requiresAuth && !token) {
    next('/login')
  } else if ((to.path === '/login' || to.path === '/register') && token) {
    next('/dashboard/dashboard-home')
  } else {
    next()
  }
})

export default router
