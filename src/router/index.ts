import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import { auth } from '../main'


const guard = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  try {
    if (auth.currentUser?.uid) {
      next();
    }
    else {
      next("/")
    }
  } catch (error) {
    next("/")
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/Authentication.vue')
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue'),
        beforeEnter: guard
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue'),
        beforeEnter: guard
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue'),
        beforeEnter: guard
      }
    ]
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router