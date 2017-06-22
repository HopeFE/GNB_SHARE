import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/code/:code',
      name: 'code',
      component: r => require.ensure([], () => r(require('./features/classCode/index')), '/code')
    },
    {
      path: '/example/:type/:subjectId/:grade/:id',
      name: 'example',
      component: r => require.ensure([], () => r(require('./features/example/index')), '/example')
    }
  ]
})
