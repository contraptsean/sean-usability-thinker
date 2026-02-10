

<template>
  <div class="engineering section mt-5 animate animate-pop animate-fade delay-1" id="engineering-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col">
          <h2 class="text-left mb-0">Engineering</h2>
          <p class="lead mb-5">Making things with web technologies</p>

          <div class="row gx-5 gy-4">

            <div class="col-xl-4 col-12">
              <a href="https://pe5tle.netlify.app/" class="card text-dark bg-color9 lg-card" target="_blank">
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
              <a href="https://dodecamoth.netlify.app/" class="card text-dark bg-color10 lg-card" target="_blank">
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
              <a href="https://morph-studio.netlify.app/" class="card text-dark bg-color11 lg-card" target="_blank">
                <div class="card-flourish text-end px-5">
                  <p class="card-text pt-5">Content Site</p>
                  <h3 class="card-title">Morph Studio</h3>
                  <div class="inner">
                    <img src="@/assets/morph-thumb.png" class="" />
                  </div>
                </div>
              </a><!--/card-->
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
/* Shared card styles are in base.css under .home .card */
.card.lg-card img {
  max-width: 1000px;
  position: relative;
  top: 1rem;
  left: 4rem;
}

.bg-color9   { background-color: var(--color-card-1); }
.bg-color10  { background-color: var(--color-card-2); }
.bg-color11 { background-color: var(--color-card-3); }
</style>


