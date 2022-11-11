import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/Login.vue')
    }, {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../views/Register.vue')
    }, {
        path: '/widget',
        name: 'widget',
        component: () =>
            import ('../views/Widget.vue')
    }, {
        path: '/list',
        name: 'propertyList',
        component: () =>
            import ('../views/PropertyList.vue')
    }, {
        path: '/grid',
        name: 'propertyGrid',
        component: () =>
            import ('../views/PropertyGrid.vue')
    }]
})

export default router