
<template>
<footer class="footer mt-5 animate animate-pop animate-fade delay-2" id="footer">
    <div class="container-fluid">
        <div class="row row-cols-1 row-cols-lg-3 p-5 mt-5">
            <div class="col">
                <p>&copy; 2026 Sean Hogan <i class="bi bi-balloon-heart"></i></p>


            </div>
            <div class="col">
                <h3 class="h5">Contact Me</h3>
                <ul>
                    <li><a href="https://www.linkedin.com/in/sean-hogan-00159610a/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/contraptsean" target="_blank">Github</a></li>
                </ul>
            </div>
            <div class="col">
                <h3 class="h5">Follow Me</h3>

                <ul>
                    <li><a href="https://waxalchemical.hashnode.dev/">Blog - Wax Alchemical</a></li>
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
p,
.h5 {
    color: var(--color-text-inverse)!important;
    font-weight: 500;
    font-family: 'Libre Franklin', sans-serif;
}

a {
    color: var(--color-text-inverse);
    font-weight: 400;
    font-family: 'Libre Franklin', sans-serif;
    transition: color var(--transition-base);
}

a:hover {
    color: #DFB2F9;
}

ul {
    list-style-type: none;
}

footer {
    background-color: var(--color-blue);
    padding-top: 2rem;
}

@media screen and (min-width: 992px) {
    ul {
        border-left: 1px solid rgba(255, 255, 255, 0.15);
    }
}
</style>
