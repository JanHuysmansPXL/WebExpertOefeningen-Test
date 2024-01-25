import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProductsView from '@/views/ProductsView.vue'
import CartView from '@/views/CartView.vue'
import NotFound from '@/views/NotFound.vue'





const router = createRouter ({
   history: createWebHistory(),
   routes: [
        {
            path: '/',
            component: HomeView
        },
        { 
            path: "/Products",
            component: ProductsView
        },
        {
            path: '/products/:price',
            name: 'productType',
            component: ProductsView
        },
        {
            path: '/About',
            component: AboutView
        },
        { 
            path: "/Cart",
            component: CartView
        },
        { 
            path: "/:notFound(.*)",
            component: NotFound
        },
    
   ]
})

export default router
