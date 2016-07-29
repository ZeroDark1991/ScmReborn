import Vue from 'vue'
import Vuex from 'vuex'
import app from './App'
require('es6-promise').polyfill()

//router
import VueRouter from 'vue-router'
import { configRouter } from './route-config'

// UI layout & components
// import './assets/icon.css'
// import './assets/common.css'

// vue-resouce
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter()
const App = Vue.extend(app)

// configure router
configRouter(router)

router.start(App, '#app')