import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ServicesPage from '../views/ServicesPage.vue'
import ContactPage from '../views/ContactPage.vue'
import CareersPage from '../views/CareersPage.vue'
import BlogPage from '../views/BlogPage.vue'

const router = createRouter({ history: createWebHistory(), routes: [
 {path:'/',component:HomePage}, {path:'/about',component:AboutPage}, {path:'/services',component:ServicesPage}, {path:'/contact',component:ContactPage}, {path:'/careers',component:CareersPage}, {path:'/blogs',component:BlogPage}
], scrollBehavior:()=>({top:0}) })
export default router
