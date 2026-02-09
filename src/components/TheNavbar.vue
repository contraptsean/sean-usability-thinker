
<template>
<nav class="navbar navbar-expand-lg navbar-light fixed-top mt-2 animate animate-fade">
  <div class="container-fluid">
    <router-link class="visually-hidden-focusable bg-grey"
        to="#main-content"
        @click="$emit('scrollFix','#main-content')">Skip to main content</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-md-center">
      <ul class="navbar-nav px-5">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/#research-strategy-section">Research &amp; Strategy</RouterLink>
          </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/#engineering-section">Engineering</RouterLink>
          </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About Me</RouterLink>
          </li>
      </ul>
    </div>
  </div>
</nav>

</template>

<script setup>
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'
import {Collapse} from 'bootstrap'

onMounted(() => {
let nav = document.querySelector(".navbar-nav");
window.onscroll = function () {
  if (window.pageYOffset > 50) {
    // @ts-ignore
    nav.classList.add("scrolled");
  } else {
    // @ts-ignore
    nav.classList.remove("scrolled");
  }
}
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

.navbar-nav {
    border-radius: var(--radius-pill);
    transition: all var(--transition-base);
    gap: 2rem;
}

.navbar-nav.scrolled {
    transition: all var(--transition-base);
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    box-shadow: 0 1px 0 var(--color-border-light);
}

ul {
    border-radius: var(--radius-pill);
    transition: all var(--transition-base);
}

a, button {
    border-radius: var(--radius-pill);
    text-decoration: none;
    transition: all var(--transition-base);
    font-weight: 500;
    font-family: 'Libre Franklin', sans-serif;
    font-size: 0.875rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-text-secondary);
}

a:hover {
    color: var(--color-text-primary);
}

.nav-item::before {
    transition: 300ms;
    height: 2px;
    content: "";
    position: absolute;
    background-color: var(--color-accent);
    width: 0%;
    bottom: 5px;
    border-radius: 5px;
}

.nav-item:hover::before {
    width: 100%;
}

</style>
