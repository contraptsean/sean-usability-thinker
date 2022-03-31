
<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <RouterLink to="/" class="d-flex align-items-center me-5 navbar-brand">
          <i class="fs-4 me-3 bi bi-wrench-adjustable-circle"></i>
          <span class="fs-4">Sean's Portfolio</span>
    </RouterLink>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <RouterLink class="nav-link" to="/#about-me">Introduction</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/#making-section">Projects</RouterLink>
          </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/#speaking-section">Speaking</RouterLink>
          </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/#teaching-section">Teaching</RouterLink>
          </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/#blog-section">Blog</RouterLink>
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
<!-- 
<nav>
    
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
      </li>
      <li>
        <RouterLink class="nav-link" to="/about">About</RouterLink>
      </li>
      <li>
        <RouterLink class="nav-link" to="/works">Selected Works</RouterLink>
      </li>
      <li>
        <RouterLink class="nav-link" to="/blog">Blog</RouterLink>
      </li>
      <li>

      </li>

    </ul>
</nav> -->

</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.connect-links .navbar-nav .nav-item a {
  color:#00BFA6;
}
.connect-links .navbar-nav .nav-item a:hover {
  color: #ccc!important;
}
</style>
