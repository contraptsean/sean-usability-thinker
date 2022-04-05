
<template>
<TheNavbar />
<RouterView />
<TheFooter />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { onMounted, nextTick } from 'vue'
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
function scrollFix(hashbang) {
      window.location.hash = hashbang;
    }
onMounted(() => {
setTimeout(() => scrollFix(this.$route.hash), 1)
})
</script>

<style>
@import '@/assets/base.css';
</style>
