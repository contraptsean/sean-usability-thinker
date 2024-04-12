
<template>
<footer class="footer mt-5 animate animate-pop animate-fade delay-2" id="footer">
    <div class="container-fluid">
        <div class="row row-cols-1 row-cols-lg-3 p-5 mt-5">
            <div class="col">
                <p>© 2024 Sean Hogan <i class="bi bi-balloon-heart"></i></p>
  
                
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
                    <li><a href="https://www.instagram.com/not.three.raccoons" target="_blank">Instagram - @not.three.raccoons</a></li>
                    <!-- <li><a href="" class="disabled">Youtube (Coming 04/03/22)</a></li> -->
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
.h5,
a {
    color:#CDDEFE;
    font-weight: 500;
}

a:hover {
    color:#fff;
}

ul {
    list-style-type: none;
}
footer {
    background-color: #3a568d;
}
@media screen and (min-width: 992px) {
    ul {
        border-left: 1px solid #eee;
    }
    
}





</style>
