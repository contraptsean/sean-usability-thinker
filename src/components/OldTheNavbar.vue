
<template>

<nav>
    <RouterLink to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto navbar-brand">
          <i class="fs-4 me-3 bi bi-wrench-adjustable-circle"></i>
          <span class="fs-4">Sean's Portfolio</span>
    </RouterLink>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <RouterLink class="nav-link" to="/">Home</RouterLink>
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
</nav>

</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>

</style>
