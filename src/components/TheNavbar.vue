
<template>
<nav class="navbar navbar-expand-lg fixed-top mt-2 animate animate-fade">
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
          <RouterLink class="nav-link" to="/#strategy-section">Strategy</RouterLink>
          </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/#research-section">Research</RouterLink>
          </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/#engineering-section">Engineering</RouterLink>
          </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/blog">Blog</RouterLink>
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
  console.log(window.pageYOffset)
  if (window.pageYOffset > 50) {
    // @ts-ignore
    nav.classList.add("scrolled");
    console.log('yes')

  } else {
    // @ts-ignore
    nav.classList.remove("scrolled");
    console.log('no')
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
    border-radius: 50px;
    transition: all .2s linear;
    gap:2rem;
}
.navbar-nav.scrolled {
transition: all .2s ease-in-out;
background-color: rgba(36, 64, 120, .6);
backdrop-filter: blur(5px);
}

ul{
    border-radius: 50px;
    transition: all .2s linear;
}


a,button{
    border-radius: var(--24px);
    text-decoration: none;
    transition: all .2s ease-in-out;
    font-weight:600;
    color: #cddefe;

}

a:hover{
  color: #fff;
}

.nav-item::before {
  transition: 300ms;
  height: 2px;
  content: "";
  position: absolute;
  background-color: #fff;
  width: 0%;
  bottom: 5px;
  border-radius: 5px;
}
.nav-item:hover::before {
  width: 100%;
}

</style>
