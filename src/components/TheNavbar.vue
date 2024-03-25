
<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container-fluid">
    <router-link class="visually-hidden-focusable bg-grey" 
        to="#main-content" 
        @click="$emit('scrollFix','#main-content')">Skip to main content</router-link>
    <RouterLink to="/" class="d-flex align-items-center me-5 navbar-brand">
          <!-- <i class="fs-4 me-3 bi bi-wrench-adjustable-circle"></i> -->
          
          <img class="ms-3" width="40" height="40" src="@/assets/sean-logo.svg" />
          <span class="fs-5 text-dark">Sean Hogan</span>

    </RouterLink>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto me-3 mb-2 mb-lg-0">

        <li class="nav-item">
          <!-- <RouterLink class="nav-link" to="/#about-me">Introduction</RouterLink> -->
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/#strategy-section">Strategy</RouterLink>
          </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/#research-section">Research</RouterLink>
          </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/#design-section">Design</RouterLink>
          </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/#blog-section">Thoughts</RouterLink>
          </li>
        
        
      </ul>
      <div class="d-flex text-white connect-links">
        <ul class="navbar-nav">
               <li class="nav-item">
                  <a href="https://www.linkedin.com/in/sean-hogan-00159610a/"><i class="bi bi-linkedin me-2"></i></a>
               </li>
               <li class="nav-item">
                  <a href="https://waxalchemical.hashnode.dev/rss.xml"><i class="bi bi-rss-fill me-2"></i></a>
               </li>
        </ul>

      </div>
    </div>
  </div>
</nav>

</template>

<script setup>
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'
import {Collapse} from 'bootstrap'
onMounted(() => {
      /* FOR MOBILE ONLY */
    if (window.matchMedia("(max-width: 991px)").matches) {
      const navLinks = document.querySelectorAll('.nav-link')
      const menuToggle = document.getElementById('navbarSupportedContent')
      const bsCollapse = new Collapse(menuToggle, {toggle: false})
      navLinks.forEach((l) => {
      l.addEventListener('click', () => { bsCollapse.toggle() })
      })
    }
})
</script>

<style scoped>
.connect-links .navbar-nav .nav-item a {
  color:#00BFA6;
}
.connect-links .navbar-nav .nav-item a:hover {
  color: #ccc!important;
}
.visually-hidden-focusable {
  position:absolute;
  background:#ccc;
  left:10%;
  padding:2rem;
  transform: translateY(-100%);
  transition: transform 0.3s;
  z-index:1;
}

.visually-hidden-focusable:focus {
  transform: translateY(0%);
}
</style>
