import Vue from 'vue'
import VueRouter from 'vue-router'
import config from "../../config.json"

Vue.use(VueRouter)

const routes = config.menu.map(x=>{
  let y = Object()
  y.path = x.url
  y.name = x.name
  y.component = ()=> import('@/views/'+x.vue_handler+'.vue')
  return y
})

const router = new VueRouter({
  routes
})

export default router
