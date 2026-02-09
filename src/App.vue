
<template>
<GeometricBackground />
<TheNavbar />
<RouterView />
<TheFooter />
</template>

<script setup>
import { RouterView, useRoute } from 'vue-router'
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
import GeometricBackground from '@/components/GeometricBackground.vue'

</script>

<style>
@import '@/assets/base.css';
</style>
