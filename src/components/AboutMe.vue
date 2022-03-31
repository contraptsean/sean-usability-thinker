<template>
<header class="introduction" id="about-me">

<div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="main-heading">Sean Hogan</h1>
        <p class="col-lg-10 fs-4"><span class="highlight-container"><span class="highlight">Usability Thinker</span></span> who specializes in big messes, funny analogies, and solving problems for people.</p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <img class="w-100" src="@/assets/undraw_thought_process.svg" />
      </div>
    </div>
  </div>
</header>
</template>
<style scoped>
.text-decoration-underline {
  text-decoration-color: #00BFA6!important;
}
.highlight-container, .highlight {
  position: relative;
}
.highlight-container{

  display: inline-block;
}
.highlight-container:before,
.highlight-container:after{
    content: ' ';
    display: block;
    height: 90%;
    width: 100%;
    margin-left: -3px;
    margin-right: -3px;
    position: absolute;
}
.highlight-container:before{
    background: rgba(68,122,184,0.1);
    transform: rotate(2deg);
    top: -1px;
    left: -1px;
}
  .highlight-container:after {
    background: rgba(68,122,184,0.2);
    top: 3px;
    right: -2px;
}
  .highlight {
    color: #333;
    z-index: 4;
  }
</style>