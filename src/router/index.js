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
        }, {
            path: '/single-property/1',
            name: 'singleProperty1',
            component: () =>
                import ('../views/SingleProperty.vue')
        }, {
            path: '/single-property/2',
            name: 'singleProperty2',
            component: () =>
                import ('../views/SingleProperty.vue')
        }, {
            path: '/single-property/3',
            name: 'singleProperty3',
            component: () =>
                import ('../views/SingleProperty.vue')
        }, {
            path: '/single-property/4',
            name: 'singleProperty4',
            component: () =>
                import ('../views/SingleProperty.vue')
        }, {
            path: '/single-property/5',
            name: 'singleProperty5',
            component: () =>
                import ('../views/SingleProperty.vue')
        }, {
            path: '/single-property/6',
            name: 'singleProperty6',
            component: () =>
                import ('../views/SingleProperty.vue')
        }, {
            path: '/single-property/7',
            name: 'singleProperty7',
            component: () =>
                import ('../views/SingleProperty.vue')
        }, {
            path: '/single-property/8',
            name: 'singleProperty8',
            component: () =>
                import ('../views/SingleProperty.vue')
        }, {
            path: '/single-property/9',
            name: 'singleProperty9',
            component: () =>
                import ('../views/SingleProperty.vue')
        }, {
            path: '/single-property/10',
            name: 'singleProperty10',
            component: () =>
                import ('../views/SingleProperty.vue')
        }, {
            path: '/single-property/11',
            name: 'singleProperty11',
            component: () =>
                import ('../views/SingleProperty.vue')
        }, {
            path: '/single-property/12',
            name: 'singleProperty12',
            component: () =>
                import ('../views/SingleProperty.vue')
        }


    ]
})

export default router