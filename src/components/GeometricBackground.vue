
<template>
  <div class="geo-bg" aria-hidden="true">
    <!-- Layer 1 (3-12%) -->
    <div class="geo-layer layer-1" :style="{ opacity: layerOpacity(0) }">
      <div class="shape diamond diamond-sm" style="top: 4%; left: 5%;"></div>
      <div class="shape diamond diamond-xs" style="top: 8%; right: 14%;"></div>
      <div class="shape diamond diamond-md" style="top: 12%; right: 2%;"></div>
    </div>

    <!-- Layer 2 (16-26%) -->
    <div class="geo-layer layer-2" :style="{ opacity: layerOpacity(0.05) }">
      <div class="shape diamond-dot" style="top: 16%; left: 4%;"></div>
      <div class="shape diamond diamond-md" style="top: 19%; right: 10%;"></div>
      <div class="shape diamond diamond-xs" style="top: 23%; left: 15%;"></div>
      <div class="shape diamond diamond-sm" style="top: 26%; right: 2%;"></div>
    </div>

    <!-- Layer 3 (29-38%) -->
    <div class="geo-layer layer-3" :style="{ opacity: layerOpacity(0.1) }">
      <div class="shape diamond diamond-lg" style="top: 29%; left: 2%;"></div>
      <div class="shape diamond diamond-sm" style="top: 32%; right: 8%;"></div>
      <div class="shape diamond-dot" style="top: 35%; left: 16%;"></div>
      <div class="shape diamond diamond-xs" style="top: 38%; right: 4%;"></div>
    </div>

    <!-- Layer 4 (41-49%) -->
    <div class="geo-layer layer-4" :style="{ opacity: layerOpacity(0.2) }">
      <div class="shape diamond diamond-lg nested" style="top: 41%; left: 10%;"></div>
      <div class="shape diamond diamond-md" style="top: 43%; right: 2%;"></div>
      <div class="shape diamond diamond-xs" style="top: 45%; left: 2%;"></div>
      <div class="shape diamond diamond-sm" style="top: 47%; right: 15%;"></div>
      <div class="shape diamond-dot" style="top: 49%; left: 20%;"></div>
    </div>

    <!-- Layer 5 (51-58%) -->
    <div class="geo-layer layer-5" :style="{ opacity: layerOpacity(0.3) }">
      <div class="shape diamond diamond-xl" style="top: 51%; right: 10%;"></div>
      <div class="shape diamond diamond-md" style="top: 53%; left: 2%;"></div>
      <div class="shape diamond diamond-sm" style="top: 55%; right: 2%;"></div>
      <div class="shape diamond diamond-xs" style="top: 57%; left: 14%;"></div>
      <div class="shape diamond-dot" style="top: 58%; right: 22%;"></div>
    </div>

    <!-- Layer 6 (60-67%) -->
    <div class="geo-layer layer-6" :style="{ opacity: layerOpacity(0.4) }">
      <div class="shape diamond diamond-lg" style="top: 60%; left: 10%;"></div>
      <div class="shape diamond diamond-xl nested" style="top: 62%; right: 2%;"></div>
      <div class="shape diamond diamond-sm" style="top: 64%; left: 2%;"></div>
      <div class="shape diamond-dot" style="top: 65%; right: 24%;"></div>
      <div class="shape diamond-dot" style="top: 25%; right: 24%;"></div>
      <div class="shape diamond diamond-xs" style="top: 67%; left: 20%;"></div>
    </div>

    <!-- Layer 7 (69-77%) -->
    <div class="geo-layer layer-7" :style="{ opacity: layerOpacity(0.55) }">
      <div class="shape diamond diamond-xs" style="top: 69%; right: 16%;"></div>
      <div class="shape diamond diamond-lg" style="top: 71%; left: 2%;"></div>
      <div class="shape diamond diamond-sm" style="top: 73%; right: 22%;"></div>
      <div class="shape diamond-dot" style="top: 75%; left: 14%;"></div>
      <div class="shape diamond diamond-xs" style="top: 77%; right: 10%;"></div>
    </div>

    <!-- Layer 8 (79-87%) -->
    <div class="geo-layer layer-8" :style="{ opacity: layerOpacity(0.7) }">
      <div class="shape diamond diamond-md" style="top: 79%; right: 10%;"></div>
      <div class="shape diamond-dot" style="top: 80%; left: 16%;"></div>
      <div class="shape diamond diamond-sm" style="top: 82%; left: 5%;"></div>
      <div class="shape diamond diamond-xs" style="top: 84%; right: 2%;"></div>
      <div class="shape diamond-dot" style="top: 85%; left: 10%;"></div>
      <div class="shape diamond diamond-sm" style="top: 87%; right: 16%;"></div>
    </div>

    <!-- Layer 9 (89-98%) -->
    <div class="geo-layer layer-9" :style="{ opacity: layerOpacity(0.82) }">
      <div class="shape diamond diamond-md" style="top: 89%; left: 6%;"></div>
      <div class="shape diamond diamond-sm" style="top: 91%; right: 5%;"></div>
      <div class="shape diamond diamond-xs" style="top: 92%; left: 20%;"></div>
      <div class="shape diamond-dot" style="top: 93%; right: 18%;"></div>
      <div class="shape diamond diamond-sm" style="top: 95%; left: 12%;"></div>
      <div class="shape diamond diamond-xs" style="top: 96%; right: 10%;"></div>
      <div class="shape diamond-dot" style="top: 97%; left: 6%;"></div>
      <div class="shape diamond-dot" style="top: 98%; right: 24%;"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollProgress = ref(0)

function onScroll() {
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = docHeight > 0 ? window.scrollY / docHeight : 0
}

function layerOpacity(threshold) {
  const progress = scrollProgress.value
  if (progress <= threshold) return 0
  const raw = (progress - threshold) / 0.12
  return Math.min(raw, 1)
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
/* ------------------------------------------------
   Dark blue palette (drawn from site's --color-blue)
   ------------------------------------------------ */
:root {
  --geo-blue-1: #1E3A5F;
  --geo-blue-2: #2B4F7A;
  --geo-blue-3: #1A3050;
}

.geo-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.geo-layer {
  position: absolute;
  inset: 0;
  transition: opacity 0.6s ease-out;
}

.shape {
  position: absolute;
}

/* ------------------------------------------------
   DIAMONDS — rotated squares with outline only
   ------------------------------------------------ */
.diamond {
  border: 1.5px solid var(--geo-blue-1, #1E3A5F);
  transform: rotate(45deg);
  opacity: 0.15;
}

.diamond-xs { width: 16px;  height: 16px; }
.diamond-sm { width: 28px;  height: 28px; }
.diamond-md { width: 48px;  height: 48px; }
.diamond-lg { width: 72px;  height: 72px; }
.diamond-xl { width: 100px; height: 100px; }

/* Nested diamond — a second outline inside */
.diamond.nested::after {
  content: '';
  position: absolute;
  inset: 6px;
  border: 1.5px solid var(--geo-blue-2, #2B4F7A);
  opacity: 0.6;
}

/* ------------------------------------------------
   DIAMOND DOTS — tiny filled diamonds
   ------------------------------------------------ */
.diamond-dot {
  width: 6px;
  height: 6px;
  background-color: var(--geo-blue-1, #1E3A5F);
  transform: rotate(45deg);
  opacity: 0.2;
}

/* Cluster: two extra small diamonds nearby */
.diamond-dot::before,
.diamond-dot::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: var(--geo-blue-2, #2B4F7A);
  transform: rotate(0deg); /* already rotated by parent */
  opacity: 0.7;
}
.diamond-dot::before { top: -12px; left: 6px; }
.diamond-dot::after  { top: 4px;   left: 14px; }

/* ------------------------------------------------
   DIAMOND LINES — diagonal lines in diamond angle
   ------------------------------------------------ */
.diamond-line {
  width: 50px;
  height: 1.5px;
  background-color: var(--geo-blue-1, #1E3A5F);
  transform: rotate(45deg);
  opacity: 0.12;
}

/* ------------------------------------------------
   SUBTLE ANIMATIONS
   ------------------------------------------------ */

/* Gentle float for the earliest layer */
@keyframes geo-drift {
  0%, 100% { transform: rotate(45deg) translateY(0); }
  50%      { transform: rotate(45deg) translateY(-5px); }
}

.layer-1 .diamond {
  animation: geo-drift 9s ease-in-out infinite;
}
.layer-1 .diamond:nth-child(2) {
  animation-delay: -4.5s;
  animation-duration: 11s;
}

/* Very slow pulse on deeper layers */
@keyframes geo-pulse {
  0%, 100% { opacity: 0.15; }
  50%      { opacity: 0.22; }
}

.layer-5 .diamond,
.layer-6 .diamond {
  animation: geo-pulse 6s ease-in-out infinite;
}

.layer-7 .diamond,
.layer-8 .diamond,
.layer-9 .diamond {
  animation: geo-pulse 5s ease-in-out infinite;
}

/* ------------------------------------------------
   RESPONSIVE — hide on narrow viewports
   ------------------------------------------------ */
@media screen and (max-width: 900px) {
  .geo-bg {
    display: none;
  }
}
</style>
