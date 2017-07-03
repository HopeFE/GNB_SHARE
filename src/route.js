import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/class',
      name: 'class',
      component: r => require.ensure([], () => r(require('./features/classCode/index')), '/code')
    },
    {
      path: '/invite',
      name: 'invite',
      component: r => require.ensure([], () => r(require('./features/invite/index')), '/invite')
    },
    {
      path: '/example/:type/:subjectId/:grade/:id',
      name: 'example',
      component: r => require.ensure([], () => r(require('./features/example/index')), '/example')
    }
  ]
})
