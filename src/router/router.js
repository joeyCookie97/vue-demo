import Home from '@/views/Home.vue'
const routes = [
  {
    path: '/home',
    redirect: to => '/'
  },
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Home'
    },
    component: Home,
    beforeEnter: (to, from, next) => {
      console.log('beforeEnter')
      if (from.name === 'login') {
        console.log(' 这是从login page 来的')
      } else if (from.name === 'About') {
        console.log(' 这是从about page 来的')
      }
      next()
    }
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'About'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    children: [
      {
        path: 'child/:user',
        name: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/count',
    name: 'count',
    component: () => import('@/views/countToDemo.vue')
  },
  {
    path: '/menu_page',
    name: 'menu_page',
    component: () => import('@/views/menu_page.vue')
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/views/404.vue')
  }
]

export default routes
