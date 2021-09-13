import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from "../components/LandingPage"
import ITSignin from "../components/Auth/ITSignin"
import DeveloperSignin from "../components/Auth/DeveloperSignin"
import Dashboard from "../components/Dashboard"
import DeploymentForm from "../components/DeploymentForm"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/ITSignin',
    name: 'ITSignin',
    component: ITSignin
  },
  {
    path: '/DeveloperSignin',
    name: 'DeveloperSignin',
    component: DeveloperSignin
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/DeploymentForm',
    name: 'DeploymentForm',
    component: DeploymentForm
  },
]

const router = new VueRouter({
  routes
})

export default router
