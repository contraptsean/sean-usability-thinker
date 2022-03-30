
<template>
<footer class="footer mt-5" id="footer">
    <div class="container-fluid bg-light">
        <div class="row  row-cols-1 row-cols-lg-3 p-5">
            <div class="col">
                <p>Made with <i class="bi bi-balloon-heart"></i> by 🖐 for NN/g</p>
            </div>
            <div class="col">
                <ul>
                    <li><a href="https://www.linkedin.com/in/sean-hogan-00159610a/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/contraptsean" target="_blank">Github</a></li>
                    <li><a href="https://waxalchemical.hashnode.dev/" target="_blank">Blog</a></li>
                </ul>
            </div>
            <div class="col">
                <ul>
                    <li><a href="https://waxalchemical.hashnode.dev/rss.xml" target="_blank">RSS</a></li>
                    <li><a href="">Linki</a></li>
                    <li><a href="">Linki</a></li>
                </ul>
            </div>
        </div>
    </div>

</footer>

</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
ul {
    list-style-type: none;
}
@media screen and (min-width: 992px) {
    ul {
        border-left: 1px solid black;
    }
    
}

</style>
