import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestPage from '@/components/TestPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/TestPage/',
      name: 'TestPage',
      component: TestPage
    },
    {
      path: '/HelloWorld/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
