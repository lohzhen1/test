import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Marketplace from '../views/Marketplace.vue'
import EWasteBins from '../views/EWasteBins.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue'
import Dashboard from '../views/Dashboard.vue'
import Inventory from '../views/Inventory.vue'
import AdminRewards from '../views/AdminRewards.vue'
import UploadImage from '../views/uploadimage.vue'
import Approveimage from '../views/Approveimage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/rewards',
      name: 'rewards',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Rewards.vue')
    },
    {
      path: '/eWasteBins',
      name: 'eWasteBins',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: EWasteBins
    },
    {
      path: '/marketplace',
      name: 'marketplace',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Marketplace
    },
    {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Cart
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Profile
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Dashboard
    }
    ,
    {
      path: '/inventory',
      name: 'inventory',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Inventory
    }
    ,

    

    {
      path: '/ordersviews',
      name: 'ordersviews',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/OrdersView.vue')
    },

    {
      path: '/adminmap',
      name: 'adminmap',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Adminmap.vue')
    },
    

    {
      path: '/adminRewards',
      name: 'AdminRewards',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AdminRewards
    },

    {
      path: '/uploadimage',
      name: 'uploadimage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/uploadimage.vue')
    },

    {
      path: '/Approveimage',
      name: 'Approveimage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Approveimage.vue')
    },

  ]
})

export default router
