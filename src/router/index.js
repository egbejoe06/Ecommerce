import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import ForgetPass from '../views/ForgetPass.vue'
import Products from '../views/Products/Products.vue'
import Women from '../views/Products/Women.vue'
import Men from '../views/Products/Men.vue'
import Furniture from '../views/Products/Furniture.vue'
import Supermarket from '../views/Products/Supermarket.vue'
import Cosmetics from '../views/Products/Cosmetics.vue'
import Shoe from '../views/Products/Shoe.vue'
import Electronics from '../views/Products/Electronics.vue'
import Outdoor from '../views/Products/Outdoor.vue'
import Best from '../views/Products/Best.vue'
import NotFound from '../views/Products/NotFound.vue'
import Productdetails from '../views/Products/Productdetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sign-in',
    name: 'Signin',
    component: HomeView
  },
  {
    path: '/sign-up',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/forgetpassword',
    name: 'Forgetpass',
    component: ForgetPass
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products
  },
  {
    path: '/Men',
    name: 'Men',
    component: Men
  },
  {
    path: '/Women',
    name: 'Women',
    component: Women
  },
  {
    path: '/Home&Furniture',
    name: 'Furniture',
    component: Furniture
  },
  {
    path: '/Supermarket',
    name: 'Supermarket',
    component: Supermarket
  },
  {
    path: '/Cosmetics',
    name: 'Cosmetics',
    component: Cosmetics
  },
  {
    path: '/Shoe&Bag',
    name: 'Shoe&Bag',
    component: Shoe
  },
  {
    path: '/Electronics',
    name: 'Electronics',
    component: Electronics
  },
  {
    path: '/Outdoor',
    name: 'Outdoor',
    component: Outdoor
  },
  {
    path: '/Bestsellers',
    name: 'Best',
    component: Best
  },
  {
    path: '/:catchAll(.*)',
    name: 'Notfound',
    component: NotFound
  },
  {
    path: '/product/:id',
    name: 'Productdetails',
    component: Productdetails
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
