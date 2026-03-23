<template>
<main id="main-content">
    <div class="case-study article container mt-5">
    <div class="row pt-5 justify-content-center">
        <div class="col-lg-8">
            <RouterLink to="/" class="back-to-projects"><span class="arrow">&larr;</span> Back to Projects</RouterLink>
            <header>
            <h1>Expo: Designing an AI Briefing System for Restaurant Operators</h1>
            </header>
            <article>

<h2>The Problem</h2>

<p>Restaurant operators pull data from a dozen systems every day, such as point-of-sale, reservations, scheduling, reviews, and accounting. When a day's revenue drops 15%, operators have 30 minutes to cross-reference those sources and figure out why. The data exists, but they don't have a lot of time for analysis.</p>

<p>Restaurants generate more structured data than almost any other small business, and the people running them rarely have a way to make sense of it quickly. Most reporting tools show you <em>what</em> happened. I wanted to build something that helped operators understand <em>why</em>: <strong>what was different yesterday, and what factors might explain it?</strong></p>

<img src="@/assets/expo-1.png" class="w-100" />

<h2>How It Works</h2>

<p>I started with developing a full product requirements document, a system architecture spec, and a build plan before touching any code. That planning phase shaped every technical decision that followed. A few core UX principles guided the design: operators should understand a report in under 30 seconds, AI explanations should never overstate confidence, and each briefing should surface one to three insights at most.</p>

<p>The first stage in the analytics pipeline computes a rolling baseline from eight weeks of same-day-of-week revenue. If today is Tuesday, it looks at the last eight Tuesdays and calculates the mean and standard deviation. The second stage flags notable deviations (z-score above 1.5 or percentage change beyond 12%) across revenue, reservations, and ticket size, ranked by statistical significance. The third stage checks whether correlated signals moved in the same direction: did reservations also drop? Did weather shift? It filters out noise and surfaces only the plausible contributing factors.</p>

<p>That structured data flows into Claude (in the demo), which generates a concise narrative summary. A system prompt enforces strict constraints: never claim causation, keep summaries under 50 words, use language like "coincided with" and "may have contributed to." A fallback generates a minimal summary if the LLM call fails, so operators always receive something useful.</p>

<p>A daily cron job computes insights for every registered restaurant each morning. If nothing significant changed, the system produces a "steady operations" message and skips the LLM call entirely. The CSV import pipeline handles real-world POS data: BOM characters, currency symbols in numeric fields, inconsistent date formats across vendors. I built format auto-detection and a column-mapping interface so operators can import their exports without reformatting anything.</p>

<p>Each morning's email includes a revenue summary with color-coded indicators, the narrative explanation, a list of possible drivers with directional arrows, and suggested investigation steps. The dashboard mirrors this with a revenue hero card, a driver grid, and a suggested actions checklist, plus paginated history of past briefings.</p>

<h2>Reflection</h2>

<p>The hardest design challenge here was epistemic. Restaurant operators make real decisions based on these reports: staffing levels, reservation policies, prep quantities. If the system overstates its confidence, it could lead to worse decisions than having no system at all. That concern shaped everything from the analytics thresholds to the prompt engineering to the email copy. Every piece of the system is designed to narrow the investigation without closing it.</p>

<p>
The <a href="https://expo-rose.vercel.app/">live demo</a> and source code are both public.</p>

</article>
        </div><!--col-->
    </div><!--row-->

</div><!--cont-->
  </main>
</template>

<style scoped>

</style>
