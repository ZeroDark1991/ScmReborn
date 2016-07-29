export function configRouter (router) {

  // normal routes
  router.map({
    '/user': {
      component: require('./views/user.vue')
    },
    '/home': {
      component: require('./views/home.vue')
    },              
    // // not found handler
    // '*': {
    //   component: require('./components/not-found.vue')
    // },
  })

  // redirect
  // router.redirect({
  //   '/': '/home',
  // })

  // global before
  // 3 options:
  // 1. return a boolean
  // 2. return a Promise that resolves to a boolean
  // 3. call transition.next() or transition.abort()

  // router.beforeEach(({from,next}) => {

  //   if (from.path === '/home') {
  //     router.app.transfer = 'back'
  //     next()
  //   } else {
  //     router.app.transfer = 'slide'
  //     next()
  //   }
  // })
}
