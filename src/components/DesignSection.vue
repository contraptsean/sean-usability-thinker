<template>
  <div class="design section" id="design-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">





<h2 class="text-center">Design</h2>


  
<div class="extra">
    <ProjectCardLeft>
  <template #image>
    <img src="@/assets/pestle-wf-thumb.png" class="w-100" />
  </template>

  <template #title>
    <h4>pe5tle</h4>
  </template>

  <template #brief>
    <p>An Image-crushing application, and study in interface and interaction design. A work in progress for sure</p>
  </template>

  <template #links>
      <ul>
        <li><i class="bi bi-arrow-right-short me-1"></i><a href="https://waxalchemical.hashnode.dev/interface-critique-and-prototyping-or-pe5tle-part-2">Blog Post on the interface: Interface Critique and Prototyping</a></li>
        <li><i class="bi bi-arrow-right-short me-1"></i><a href="https://waxalchemical.hashnode.dev/pe5tle-building-a-generative-glitch-art-project-with-vue-3-and-p5js-or-part-1">Blog Post on the build: pe5tle - Building a Generative glitch art project with Vue 3 & p5.js</a></li>
      </ul>
  </template>
</ProjectCardLeft>


    <ProjectCardRight>
  <template #image>
    <img src="@/assets/dodeca-thumb.png" class="w-100" />
  </template>

  <template #title>
    <h4>dodecamoth</h4>
  </template>

  <template #brief>
    <p>A proof of concept on 3D rendering and controling other js frameworks with Vue. People liked it so I left it up and gave it a little interface to tell friends about the controls</p>
  </template>

  <template #links>
      <ul>
        <li><i class="bi bi-arrow-right-short me-1"></i><a href="https://dodecamoth.netlify.app/">https://dodecamoth.netlify.app/</a></li>
      </ul>
  </template>
</ProjectCardRight>

<ProjectCardLeft>
  <template #image>
    <img src="@/assets/morph-thumb.png" class="w-100" />
  </template>

  <template #title>
    <h4>Morph Studio</h4>
  </template>

  <template #brief>
    <p>A studio site for multiple artists and hair educators. Resulted in a front end allowing for easy booking of any stylist, and for each person to have agency over how they want to present thier services</p>
  </template>

  <template #links>
<RouterLink to="/morph-studio-case-study" class="btn btn-outline-dark">Case Study </RouterLink>
  </template>
</ProjectCardLeft>

</div>

<p class="display-6 text-center pt-5">For more little usability and design artifacts, you can <a href="https://instructsean.wordpress.com/">check out my last portfolio</a></p>
        </div>
      </div> <!--row-->
    </div><!---contain-->
</div><!--end section-->
</template>


<script setup>
import ProjectCardLeft from './ProjectCardLeft.vue'
import ProjectCardRight from './ProjectCardRight.vue'

</script>
<style scoped>
.in-progress h3 {
  text-align: right;
}
ul {
  list-style-type: none;
  padding-left:0px;
}
img {
  object-fit: cover!important;
}
img.thumb {
  width: 711px;
  height: 400px;
}

.recent-heading, 
.recent-highlight,
.in-progress-heading, 
.in-progress-highlight,
.extra-heading, 
.extra-highlight {
  position: relative;
}
.recent-heading,
.in-progress-heading, 
.extra-heading {
  display: inline-block;
}
.recent-heading:before,
.recent-heading:after,
.in-progress-heading:before,
.in-progress-heading:after,
.extra-heading:before,
.extra-heading:after {
    content: ' ';
    display: block;
    height: 90%;
    width: 100%;
    margin-left: -3px;
    margin-right: -3px;
    position: absolute;
}
.recent-heading:before{
    background: rgba(242,122,242,0.1);
    transform: rotate(2deg);
    top: -1px;
    left: -1px;
}
  .recent-heading:after {
    background: rgba(242,122,242,0.2);
    top: 3px;
    right: -2px;
}
.in-progress-heading:before{
    background: rgba(0,191,166,0.1);
    transform: rotate(-3deg);
    top: -1px;
    left: -1px;
}
  .in-progress-heading:after {
    background: rgba(0,191,166,0.2);
    top: 3px;
    right: -2px;
}
.extra-heading:before{
    background: rgba(68,122,184,0.1);
    transform: rotate(2deg);
    top: -1px;
    left: -1px;
}
  .extra-heading:after {
    background: rgba(68,122,184,0.2);
    top: 3px;
    right: -2px;
}
  .recent-highlight,
  .in-progress-highlight,
  .extra-highlight {
    color: #333;
    z-index: 4;
  }
  .display-6 {
    font-size: 1.3rem!important;
  }
</style>