import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/global-direct-case-study',
            name: 'global-direct-case-study',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../views/GlobalDirectCaseStudy.vue')
        },
        {
            path: '/morph-studio-case-study',
            name: 'morph-studio-case-study',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../views/MorphStudioCaseStudy.vue')
        },
        {
            path: '/blog/:slug',
            name: 'BlogContent',
            props: route => ({ slug: route.params.slug }),
            component: () =>
                import ('../views/BlogContent.vue'),
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            console.log('id')
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 70
            }
        } else {
            return { top: 0 }
        }
    },
})

export default router