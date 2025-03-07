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
            path: '/participant-satisfaction-case-study',
            name: 'participant-satisfaction-case-study',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../views/ParticipantSatisfactionCaseStudy.vue')
        },
        {
            path: '/new-orleans-bingo-case-study',
            name: 'new-orleans-bingo-case-study',
            component: () =>
                import ('../views/NewOrleansBingoCaseStudy.vue')
        },
        {
            path: '/trust-and-value-case-study',
            name: 'trust-and-value-case-study',
            component: () =>
                import ('../views/TrustAndValueCaseStudy.vue')
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
            path: '/research-story-case-study',
            name: 'research-story-case-study',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../views/ResearchStoryCaseStudy.vue')
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
            path: '/seans-resume',
            name: 'seans-resume',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../views/SeansResume.vue')
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
            path: '/blog',
            name: 'BlogSection',
            component: () =>
                import ('../views/BlogSection.vue'),
        },
        {
            path: '/blog/:slug',
            name: 'BlogContent',
            props: route => ({ slug: route.params.slug }),
            component: () =>
                import ('../views/BlogContent.vue'),
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