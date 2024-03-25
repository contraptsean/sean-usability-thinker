
<template>
<footer class="footer mt-5" id="footer">
    <div class="container-fluid bg-light">
        <div class="row  row-cols-1 row-cols-lg-3 p-5">
            <div class="col">
                <p>Made with <i class="bi bi-balloon-heart"></i> by Me :)<i class="bi bi-emoji-grimace"></i></p>
  
                
            </div>
            <div class="col">
                <h5>Contact Me</h5>
                <ul>
                    <li><a href="https://www.linkedin.com/in/sean-hogan-00159610a/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/contraptsean" target="_blank">Github</a></li>
                    <li><a href="mailto:contraptsean@gmail.com/" target="_blank">contraptsean@gmail.com</a></li>
                </ul>
            </div>
            <div class="col">
                <h5>Follow Me</h5>

                <ul>
                    <li><a href="https://waxalchemical.hashnode.dev/rss.xml" target="_blank">RSS</a></li>
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
ul {
    list-style-type: none;
}
footer {
    border-top:1px solid #ddd;
}
@media screen and (min-width: 992px) {
    ul {
        border-left: 1px solid black;
    }
    
}


</style>
