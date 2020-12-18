import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './router'


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const HAS_LOGINED = true

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title ) {
    window.document.title = to.meta.title
  }else  {
    window.document.title = '未设置'
  }
  console.log("beforeEach");
  if( to.name !== 'login') {
    if(HAS_LOGINED) {
      next()
    }else {
      next({
        name: 'login'
      })
    }
  }else next()
})

router.beforeResolve((to, from, next) => {
  console.log("beforeResolve");
  next()
})

router.afterEach((to, from) => {
  console.log("afterEach");
})

export default router
