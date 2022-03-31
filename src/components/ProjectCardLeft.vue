<template>
<div class="project" id="project-card">

<div class="card card-gradient-border mb-3 shadow card-glow" style="max-width: 100rem;">
  <div class="row">
    <div class="col-lg-6">
          <slot name="image"></slot>
      <!-- <img src="..." class="img-fluid rounded-start" alt="..."> -->
    </div>
    <div class="col-lg-6">
      <div class="card-body pt-5">
        <div class="card-title">
          <slot name="title"></slot>
        </div>
        <div class="card-text">
            <slot name="brief"></slot>
        </div>
        <div class="card-text">
          <slot name="links"></slot>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<style scoped>
.card-gradient-border {
  color: #111;
  border: 2px double transparent;
  background-image: linear-gradient(rgb(13, 14, 33), rgb(138, 247, 201)), radial-gradient(circle at left top, rgb(138, 247, 201), rgb(255, 200, 249));
  background-origin: border-box;
  background-clip: padding-box, border-box;
  transition: all 0.3s ease;
  position: relative;
  z-index: 0;

}
.card-glow:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .5s ease-in;
}
.card-glow:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    left: 0;
    top: 0;}
.card-glow:hover:before {
    opacity: 1;
}
@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
</style>