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
            path: '/nih-case-study',
            name: 'nih-case-study',
            component: () =>
                import ('../views/NihCaseStudy.vue')
        },
        {
            path: '/new-orleans-bingo-case-study',
            name: 'new-orleans-bingo-case-study',
            component: () =>
                import ('../views/NewOrleansBingoCaseStudy.vue')
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
            path: '/ochsner-building-case-study',
            name: 'ochsner-building-case-study',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../views/OchsnerBuildingCaseStudy.vue')
        },
        {
            path: '/ochsner-ab-case-study',
            name: 'ochsner-ab-case-study',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../views/OchsnerAbCaseStudy.vue')
        },
        {
            path: '/lao-zi-case-study',
            name: 'lao-zi-case-study',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../views/LaoziCaseStudy.vue')
        },
        {
            path: '/astro-report',
            name: 'astro-report',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../views/AstroReport.vue')
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
            path: '/big-idea-radar-case-study',
            name: 'big-idea-radar-case-study',
            component: () =>
                import ('../views/BigIdeaRadarCaseStudy.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ('../views/AboutView.vue')
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            //reset focus
            document.body.setAttribute("tabindex", "-1");
            document.body.focus();
            document.body.removeAttribute("tabindex");
            console.log(from)
            console.log(to);
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 100,
            }
        } else {
            //reset focus
            document.body.setAttribute("tabindex", "-1");
            document.body.focus();
            document.body.removeAttribute("tabindex");
            //scroll to top
            return { left: 0, top: 0 }
        }
    },
})

export default router