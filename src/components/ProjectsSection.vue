<template>
  <div class="making section" id="making-section">
    <div class="container">
      <div class="row">



<h2 class="text-center mb-0">Projects</h2>
<div class="recent">
  <span class="recent-heading my-4">
    <span class="recent-highlight">

  <h3 class="">Recent</h3>
    </span>
  </span>

  <ProjectCardLeft>
  <template #image>
    <img src="@/assets/direct-macbook-prototype-thumb.png" class="w-100"  />
  </template>

  <template #title>
    <h4>Global Direct</h4>
  </template>

  <template #brief>
    <p>Created digital pathway and services for accessing individual courses in online higher education. Resulted in a catalog front, admin interface for the courses and enrollments, a portal back-end, new workflows for the main degree pathway, and additional revenue streams</p>
  </template>

  <template #links>
<RouterLink to="/global-direct-case-study" class="btn btn-outline-dark">See the Case Study </RouterLink>
  </template>
</ProjectCardLeft>

  <ProjectCardRight>
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
<RouterLink to="/morph-studio-case-study" class="btn btn-outline-dark">See the Case Study </RouterLink>
  </template>
</ProjectCardRight>
</div>

<div class="in-progress">
    <span class="in-progress-heading my-4">
    <span class="in-progress-highlight">
  <h3>In Progress</h3>

    </span>
    </span>
  <ProjectCardLeft>
  <template #image>
    <img src="@/assets/pestle-wf-thumb.png" class="w-100" />
  </template>

  <template #title>
    <h4>pe5tle</h4>
  </template>

  <template #brief>
    <p>In Image-crushing application, and study in interface and interaction design. A Work in Progress for sure</p>
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
    <img src="@/assets/undraw_bookstore.svg" class="w-100" style="" />
  </template>

  <template #title>
    <h4>Bookstore</h4>
  </template>

  <template #brief>
    <p>My latest project. I'm having big thoughts about how we manage our processes and how students get class materials in general. Here are some notes:</p>
  </template>

  <template #links>
      <ul>
        <li><i class="bi bi-arrow-right-short me-1"></i><a href="https://usability.notion.site/Bookstore-Meeting-Introduction-to-Issues-b93776567ddc4a4396b5b5f453702ef1">Bookstore Meeting Notes: Introduction to Issues</a></li>
        <li><i class="bi bi-arrow-right-short me-1"></i><a href="https://usability.notion.site/Bookstore-Env-Scan-2d3ec44db6914fa3ad9ce5fab8b0908b">Bookstore Environmental Scan</a></li>
      </ul>
  </template>
</ProjectCardRight>
</div>
<div class="extra">
    <span class="extra-heading my-4">
    <span class="extra-highlight">
  <h3>Extra</h3>
    </span>
    </span>
    <ProjectCardLeft>
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
        <li><i class="bi bi-arrow-right-short me-1"></i><a href="https://dodeca-moth.netlify.app/">https://dodeca-moth.netlify.app/</a></li>
      </ul>
  </template>
</ProjectCardLeft>
</div>
<p class="display-6 text-center pt-5">For more little usability artifacts, you can <a href="https://instructsean.wordpress.com/">check out my last portfolio</a></p>
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
    transform: rotate(2deg);
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