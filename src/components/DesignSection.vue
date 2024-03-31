

<template>
  <div class="engineering section mt-5" id="engineering-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col">
          <h2 class="text-left mb-0">Engineering</h2>
          <p class="lead mb-5">Making things with web technologies</p>

          <div class="row gx-5 gy-5">

            <div class="col-xl-4 col-12">
              <a href="https://pe5tle.netlify.app/" class="card text-dark bg-pink lg-card">
                <div class="card-flourish text-end px-5">
                  <!-- <img src="@/assets/research-story.png" class="card-img" alt="..."> -->
                  <p class="card-text pt-5">Image Destruction</p>
                  <h3 class="card-title">pe5tle</h3>
                  <div class="inner">
                    <img src="@/assets/pestle-wf-thumb.png" class="" />
                  </div>
                </div>
              </a><!--/card-->
            </div><!--/col-->


            <div class="col-xl-4 col-12">
              <a href="https://dodecamoth.netlify.app/" class="card text-dark bg-green lg-card">
                <div class="card-flourish text-end px-5">
                  <!-- <img src="@/assets/research-story.png" class="card-img" alt="..."> -->
                  <p class="card-text pt-5">Three Dimension Rendering</p>
                  <h3 class="card-title">dodecamoth</h3>
                  <div class="inner">
                    <img src="@/assets/dodeca-thumb.png" class="" />
                  </div>
                </div>
              </a><!--/card-->
            </div><!--/col-->

            <div class="col-xl-4 col-12">
              <RouterLink to="/morph-studio-case-study" class="card text-dark bg-purple lg-card">
                <div class="card-flourish text-end px-5">
                  <p class="card-text pt-5">Content Site</p>
                  <h3 class="card-title">Morph Studio</h3>
                  <div class="inner">
                    <img src="@/assets/morph-thumb.png" class="" />
                  </div>
                </div>
              </RouterLink><!--/card-->
            </div><!--/col-->



          </div><!--row-->





          
        </div><!--col-->
      </div> <!--row-->
    </div><!---contain-->
  </div><!--end section-->

</template>


<script setup>


</script>
<style scoped>
.card {
  height: 400px;
  border-radius: 3rem;
  overflow: hidden;
  opacity: .9;
  transition: all .2s;
  text-decoration: none;
}

.card:hover {
  transform: translate3d(0, -5px, 0);
  opacity: 1
}

.card .inner {
  transition: all .5s;
  transform: translate3d(0, -.5rem, 0)
}

.card:hover .inner {
  transform: translate3d(0, .5rem, 0);
  transition: all .5s;
}

.card:active {
  transform: translateZ(0);
  box-shadow: none;
  transition: all .5;
}

.card.sm-card img {
  max-width: 600px;
  position: relative;
  top: 1rem;
  left: -1.5rem;
}

.card.lg-card img {
  max-width: 1000px;
  position: relative;
  top: 1rem;
  left: 4rem;
}

.bg-pink {
  background-color: peachpuff;
}
.bg-green {
  background-color: turquoise;
}

.bg-purple {
  background-color: mistyrose;
}


</style>


