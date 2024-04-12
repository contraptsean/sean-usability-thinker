<template>
  <div class="strategy section animate animate-pop animate-fade delay-1" id="strategy-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col">
          <h2 class="text-left mb-0">Strategy</h2>
          <p class="lead mb-5">Helping organizations use data to make the best decisions</p>

          <div class="row gx-5 gy-4">

            <div class="col-xl-7 col-lg-6 col-12">
              <RouterLink to="/research-story-case-study" class="card text-dark bg-pink lg-card">
                <div class="card-flourish text-end px-5">
                  <p class="card-text pt-5">National Institute of Health</p>
                  <h3 class="card-title">Research Highlights Story</h3>
                  <div class="inner">
                    <img src="@/assets/research-story.png" class="" />
                  </div>
                </div>
              </RouterLink><!--/card-->
            </div><!--/col-->


            <div class="col-xl-5 col-lg-6 col">
              <RouterLink to="/global-direct-case-study" class="card text-dark bg-green sm-card">
                <div class="card-flourish text-end px-5">
                  <p class="card-text pt-5">Colorado State</p>
                  <h3 class="card-title">Global Direct</h3>
                  <div class="inner">
                    <img src="@/assets/direct-macbook-prototype-thumb.png" class="align-self-end" />
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
  left: -4rem;
}

.bg-pink {
  background-color: papayawhip;
}

.bg-green {
  background-color: mintcream;
}
</style>