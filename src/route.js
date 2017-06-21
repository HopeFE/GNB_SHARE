import Vue from 'vue'
import Router from 'vue-router'
import Example from '@/featuers/example/index'
import ClassCode from '@/featuers/classCode/index'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '/example/:type/:subjectId/:grade/:id',
      name: 'example',
      component: Example
    },
    {
      path: '/code/:code',
      name: 'code',
      component: ClassCode
    }
  ]
})
