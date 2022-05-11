import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Messege_info from '../views/Messege_info.vue'
import Provision from '../views/Provision.vue'
import Franchise from '../views/Franchise.vue'
import Check_req_status from '../views/Check_req_status.vue'
import LoginAdmin from '../views/LoginAdmin.vue'
import AdminPost from '../components/AdminPost.vue'

import Admin from '../components/Admin.vue'
import User from '../components/User.vue'
import Detail_area from '../components/layouts/Detail_area.vue'
import Confirm from '../components/layouts/Confirm.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/Home',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/Product',
    name: 'Product',
    component: Product
  },
  {
    path: '/Provision',
    name: 'Provision',
    component: Provision
  },
  {
    path: '/Messege_info',
    name: 'Messege_info',
    component: Messege_info
  },
  {
    path: '/Franchise',
    name: 'Franchise',
    component: Franchise
  },
  {
    path: '/Franchise/Detail_area',
    name: 'Detail_area',
    component: Detail_area,
    meta: {
      auth: true
  }
  },
 
  {
    path: '/Franchise/Detail_area/Confirm',
    name: 'Confirm',
    component: Confirm
  },

// test
  {
    path: '/Check_req_status',
    name: 'Check_req_status',
    component: Check_req_status
  },
  {
    path: '/LoginAdmin',
    name: 'LoginAdmin',
    component: LoginAdmin,
    meta: {
      header: 1
    }
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin,
    meta: {
      header: 1
    }
  },
  {
    path: '/Admin/User',
    name: 'User',
    component: User,
    meta: {
      header: 1
    }
  },
  {
    path: '/AdminPost',
    name: 'AdminPost',
    component: AdminPost,
    meta: {
      header: 1
    }
  },


]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
