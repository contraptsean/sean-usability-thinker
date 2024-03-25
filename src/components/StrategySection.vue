<template>
  <div class="strategy section" id="strategy-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">





<h2 class="text-center">Strategy</h2>
<div class="recent">
 <!--    <span class="recent-heading my-4">
    <span class="recent-highlight">

<h3 class="">Recent</h3>
    </span>
  </span> -->

  <ProjectCardRight>
  <template #image>
    <img src="@/assets/research-story.png" class="w-100" />
  </template>

  <template #title>
    <h4>Research Highlights Story</h4>
  </template>

  <template #brief>
    <p>This case study reviews a story I designed for participant engagement</p>
  </template>

  <template #links>
<RouterLink to="/research-story-case-study" class="btn btn-outline-dark">Case Study </RouterLink>
  </template>
</ProjectCardRight>

<ProjectCardLeft>
  <template #image>
    <img src="@/assets/direct-macbook-prototype-thumb.png" class="w-100"  />
  </template>

  <template #title>
    <h4>Global Direct</h4>
  </template>

  <template #brief>
    <p>Created a digital pathway and services for accessing individual courses in online higher education. Resulted in a catalog front, admin interface for the courses and enrollments, a portal back-end, new workflows for the main degree pathway, and additional revenue streams</p>
  </template>

  <template #links>
<RouterLink to="/global-direct-case-study" class="btn btn-outline-dark">Case Study </RouterLink>
<!-- <a href="https://usability.notion.site/UX-Strategy-GD-Iteration-2-88eeba9540ad44619a16fcb18e8b83c2" class="btn btn-outline-dark ms-3">Next Iteration Notes</a> -->
  </template>
</ProjectCardLeft>

</div>

<div class="in-progress">
   
</div>
<div class="extra">
   
</div>

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