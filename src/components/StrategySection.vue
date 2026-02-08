<template>
  <div class="strategy section animate animate-pop animate-fade delay-1" id="strategy-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col">
          <h2 class="text-left mb-0">Service Design</h2>
          <p class="lead mb-5">Helping organizations use data and research to make services</p>

          <div class="row gx-5 gy-4">

            <div class="col-xl-7 col-lg-6 col-12">
              <RouterLink to="/research-story-case-study" class="card text-dark bg-color5 lg-card">
                <div class="card-flourish text-end px-5">
                  <p class="card-text pt-5">National Institute of Health</p>
                  <h3 class="card-title">Developing a new type of reward for participation</h3>
                  <div class="inner">
                    <img src="@/assets/research-story.png" class="" />
                  </div>
                </div>
              </RouterLink><!--/card-->
            </div><!--/col-->


            <div class="col-xl-5 col-lg-6 col">
              <RouterLink to="/global-direct-case-study" class="card text-dark bg-color6 sm-card">
                <div class="card-flourish text-end px-5">
                  <p class="card-text pt-5">Colorado State</p>
                  <h3 class="card-title">How I designed a million dollar service</h3>
                  <div class="inner">
                    <img src="@/assets/direct-macbook-prototype-thumb.png" class="align-self-end" />
                  </div>
                </div>
              </RouterLink><!--/card-->
            </div><!--/col-->

          </div><!--row-->

          <div class="row gx-5 gy-4 mt-3">
            <div class="col-xl-5 col-lg-6 col">
  <RouterLink to="/lao-zi-case-study" class="card text-dark bg-color7 sm-card">
    <div class="card-flourish text-end px-5">
      <p class="card-text pt-5">New Orleans Local</p>
      <h3 class="card-title">Designing a self-service ice cream pickup</h3>
      <div class="inner">
        <img src="@/assets/undraw_icecream.svg" class="align-self-end" />
      </div>
    </div>
  </RouterLink><!--/card-->
</div><!--/col-->


<div class="col-xl-7 col-lg-6 col-12">
  <RouterLink to="/participant-satisfaction-case-study" class="card text-dark bg-color8 lg-card">
                <div class="card-flourish text-end px-5">
                  <!-- <img src="@/assets/research-story.png" class="card-img" alt="..."> -->
                  <p class="card-text pt-5">National Institute of Health</p>
                  <h3 class="card-title">Changing the biggest bets of the program</h3>
                  <div class="inner">
                    <img src="@/assets/undraw_data.png" class="" />
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
/* Shared card styles are in base.css under .home .card */
.card.lg-card img {
  max-width: 1000px;
  position: relative;
  top: 1rem;
  left: -4rem;
}


.bg-color1 { background-color: var(--color-card-1); }
.bg-color2   { background-color: var(--color-card-2); }
.bg-color3   { background-color: var(--color-card-3); }
.bg-color4  { background-color: var(--color-card-4); }
.bg-color5 { background-color: var(--color-card-5); }
.bg-color6   { background-color: var(--color-card-6); }
.bg-color7   { background-color: var(--color-card-7); }
.bg-color8  { background-color: var(--color-card-8); }
</style>