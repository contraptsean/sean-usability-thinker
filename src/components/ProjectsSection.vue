<template>
  <div class="projects section mt-5 animate animate-pop animate-fade delay-1" id="research-strategy-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col">
          <h2 class="text-left mb-0">Research and Strategy</h2>
          <p class="lead mb-5">Uncovering insights and designing services where operations, technology, and human experience intersect</p>

          <div class="row gx-5 gy-4">

            <div class="col-xl-6 col-lg-6 col-12">
              <RouterLink to="/global-direct-case-study" class="card text-dark bg-color1">
                <div class="card-flourish text-end px-5">
                  <p class="card-text pt-5">Colorado State</p>
                  <h3 class="card-title">How I designed a million dollar service</h3>
                  <div class="inner">
                    <img src="@/assets/direct-macbook-prototype-thumb.png" />
                  </div>
                </div>
              </RouterLink>
            </div>

            <div class="col-xl-6 col-lg-6 col-12">
              <RouterLink to="/ochsner-building-case-study" class="card text-dark bg-color2">
                <div class="card-flourish text-end px-5">
                  <p class="card-text pt-5">Ochsner Health</p>
                  <h3 class="card-title">Building a UX Research Program at a Hospital Network</h3>
                  <div class="inner">
                    <img src="@/assets/undraw_medicine.svg" />
                  </div>
                </div>
              </RouterLink>
            </div>

            <div class="col-xl-6 col-lg-6 col-12">
              <RouterLink to="/trust-and-value-case-study" class="card text-dark bg-color3">
                <div class="card-flourish text-end px-5">
                  <p class="card-text pt-5">National Institute of Health</p>
                  <h3 class="card-title">Changing the biggest bets of the program</h3>
                  <div class="inner">
                    <img src="@/assets/undraw_data.png" />
                  </div>
                </div>
              </RouterLink>
            </div>

            <div class="col-xl-6 col-lg-6 col-12">
              <RouterLink to="/astro-report" class="card text-dark bg-color4">
                <div class="card-flourish text-end px-5">
                  <p class="card-text pt-5">Task Analysis</p>
                  <h3 class="card-title">Foundational Astro insights</h3>
                  <div class="inner">
                    <img src="@/assets/astro-thumb.png" />
                  </div>
                </div>
              </RouterLink>
            </div>

            <div class="col-xl-6 col-lg-6 col-12">
              <RouterLink to="/new-orleans-bingo-case-study" class="card text-dark bg-color5">
                <div class="card-flourish text-end px-5">
                  <p class="card-text pt-5">National Institute of Health</p>
                  <h3 class="card-title">Inventing a new research method</h3>
                  <div class="inner">
                    <img src="@/assets/undraw_whiteboard.png" />
                  </div>
                </div>
              </RouterLink>
            </div>

            <div class="col-xl-6 col-lg-6 col-12">
              <RouterLink to="/lao-zi-case-study" class="card text-dark bg-color6">
                <div class="card-flourish text-end px-5">
                  <p class="card-text pt-5">New Orleans Local</p>
                  <h3 class="card-title">Designing a self-service ice cream pickup</h3>
                  <div class="inner">
                    <img src="@/assets/undraw_icecream.svg" />
                  </div>
                </div>
              </RouterLink>
            </div>

            <div class="col-xl-6 col-lg-6 col-12">
              <RouterLink to="/research-story-case-study" class="card text-dark bg-color7">
                <div class="card-flourish text-end px-5">
                  <p class="card-text pt-5">National Institute of Health</p>
                  <h3 class="card-title">Developing a new type of reward for participation</h3>
                  <div class="inner">
                    <img src="@/assets/research-story.png" />
                  </div>
                </div>
              </RouterLink>
            </div>

            <div class="col-xl-6 col-lg-6 col-12">
              <RouterLink to="/participant-satisfaction-case-study" class="card text-dark bg-color8">
                <div class="card-flourish text-end px-5">
                  <p class="card-text pt-5">National Institute of Health</p>
                  <h3 class="card-title">Understanding participant motivation</h3>
                  <div class="inner">
                    <img src="@/assets/dashboard-wireframe.png" />
                  </div>
                </div>
              </RouterLink>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<script setup>


</script>
<style scoped>
/* Shared card styles are in base.css under .home .card */
.card img {
  max-width: 700px;
  position: relative;
  top: 1rem;
  left: -1.5rem;
}

.bg-color1 { background-color: #EDF1FA; }
.bg-color2 { background-color: #E7EDF8; }
.bg-color3 { background-color: #E1E9F6; }
.bg-color4 { background-color: #DBE4F4; }
.bg-color5 { background-color: #D5DFF2; }
.bg-color6 { background-color: #CFDAF0; }
.bg-color7 { background-color: #C9D5EE; }
.bg-color8 { background-color: #C3D0EC; }
</style>
