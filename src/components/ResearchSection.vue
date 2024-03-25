<template>
  <div class="research section" id="research-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">





<h2 class="text-center">Research</h2>
<div class="recent">


  <ProjectCardRight>
  <template #image>
    <img src="@/assets/dashboard-wireframe.png" class="w-75" />
  </template>

  <template #title>
    <h4>Participant Satisfaction & Motivation</h4>
  </template>

  <template #brief>
    <p>This case study reviews research I wrote which changed the narrative on participant satisfaction and motivation</p>
  </template>

  <template #links>
<RouterLink to="/participant-satisfaction-case-study" class="btn btn-outline-dark">Case Study </RouterLink>
  </template>
</ProjectCardRight>


</div>


  
    <ProjectCardLeft>
  <template #image>
    <img src="@/assets/astro-thumb.png" class="w-100" />
  </template>

  <template #title>
    <h4>Task Analysis Report: Astro</h4>
  </template>

  <template #brief>
    <p>A Task Analysis I ran on the Astro Homepage</p>
  </template>

  <template #links>
    <RouterLink to="/astro-report" class="btn btn-outline-dark">Analysis Report</RouterLink>

  </template>
</ProjectCardLeft>

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