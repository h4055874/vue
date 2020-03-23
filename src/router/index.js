import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import index from '@/components/index'

Vue.use(Router)

var routes = [
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
]
export default new Router({
  routes: routes,
  mode: 'history'   /*hash*/
})
