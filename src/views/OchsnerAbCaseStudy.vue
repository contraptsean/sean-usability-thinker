
<template>
<main id="main-content">
    <div class="case-study article container mt-5">
    <div class="row pt-5 justify-content-center">
        <div class="col-lg-8">
            <RouterLink to="/" class="back-to-projects"><span class="arrow">&larr;</span> Back to Projects</RouterLink>
            <header>
            <h1>Increasing Appointment Conversions by 175% with Care Tiles A/B Testing</h1>
            </header>
            <article>
            <p class="lead">At Ochsner Health, I designed and ran an A/B test that repositioned Care Tiles on high-traffic service and location pages. The result was a 57% conversion lift on service pages and a 175% lift on location pages, both at near-perfect statistical significance.</p>

<h2>At a Glance</h2>

<table class="table">
<thead>
<tr>
<th>Metric</th>
<th>Result</th>
</tr>
</thead>
<tbody>
<tr>
<td>Service Page Conversion Lift</td>
<td><strong>+57.4%</strong> (97% statistical significance)</td>
</tr>
<tr>
<td>Location Page Conversion Lift</td>
<td><strong>+175.7%</strong> (100% statistical significance)</td>
</tr>
<tr>
<td>Variant Conversion Rate</td>
<td><strong>10–11%</strong> vs. 4–6% control</td>
</tr>
</tbody>
</table>

<h2>The Challenge</h2>

<p>At Ochsner Health, our service pages, like Pediatrics, and location pages, like Ochsner Medical Complex – Clearview, are critical entry points for patients looking to book appointments. As we implemented "Care Tiles", or cards showing available providers with appointment time slots, I studied the implementation and tried to understand how to make them the most effective.</p>

<p>I hypothesized that patients visiting these pages had high intent to find a doctor and make an appointment, and that the current layout was creating unnecessary friction by pushing those conversion opportunities out of view.</p>

<h2>My Approach</h2>

<p>I designed a straightforward A/B test to validate this hypothesis. The concept was simple: take the existing Care Tiles component and move it from below the page content to directly above it, immediately after the hero section. No redesign of the tiles themselves, only a repositioning to prioritize the action patients were most likely looking for.</p>

<p>I selected the two of the highest-traffic pages at the time to maximize data collection: the Pediatrics service page and the OMC Clearview location page. The control (A) kept the tiles in their original position below content, while the variant (B) placed them directly above the content, just below the hero.</p>

            <img src="@/assets/ochsner-ab-1.png" class="w-100" />


<p>For this test, I defined "conversions" as any click on a provider card, the location search, or the "View All" button: the primary actions that move a patient toward scheduling an appointment. The test ran for two weeks, and collected enough data for me to make significant insights for our population.</p>

<h2>Results</h2>

<p>The results were decisive and exceeded my expectations.</p>

<h3 class="mt-5">Pediatrics Service Page</h3>

<table class="table">
<thead>
<tr>
<th>Variant</th>
<th>Unique Visitors</th>
<th>Conversions</th>
<th>Conversion Rate</th>
<th>Stat. Significance</th>
</tr>
</thead>
<tbody>
<tr>
<td>Control (Below Content)</td>
<td>339</td>
<td>22</td>
<td>6.49%</td>
<td>—</td>
</tr>
<tr>
<td>Variant (Above Content)</td>
<td>323</td>
<td>33</td>
<td>10.22%</td>
<td>99%</td>
</tr>
<tr>
<td><strong>Lift</strong></td>
<td></td>
<td><strong>+50%</strong></td>
<td><strong>+57.4%</strong></td>
<td></td>
</tr>
</tbody>
</table>

<h3 class="mt-5">OMC Clearview Location Page</h3>

<table class="table mb-5">
<thead>
<tr>
<th>Variant</th>
<th>Unique Visitors</th>
<th>Conversions</th>
<th>Conversion Rate</th>
<th>Stat. Significance</th>
</tr>
</thead>
<tbody>
<tr>
<td>Control (Below Content)</td>
<td>277</td>
<td>11</td>
<td>3.97%</td>
<td>—</td>
</tr>
<tr>
<td>Variant (Above Content)</td>
<td>274</td>
<td>30</td>
<td>10.95%</td>
<td>100%</td>
</tr>
<tr>
<td><strong>Lift</strong></td>
<td></td>
<td><strong>+173%</strong></td>
<td><strong>+175.7%</strong></td>
<td></td>
</tr>
</tbody>
</table>

<p>On the Pediatrics page, the variant achieved a 10%+ conversion rate versus 6.49% for the control, a 57% improvement. The location page results were even more dramatic: the variant converted at 10.95% compared to just 3.97% for the control, a 175.7% lift.</p>

<p>An important finding was that the higher conversion rate on <strong>the Care Tiles did not cannibalize other conversion opportunities on the page</strong>. The "Find a Doctor" button in the hero section, for example, saw no meaningful decrease in clicks. Moving the tiles up simply captured intent that was previously being lost to page abandonment before users ever scrolled to the tiles.</p>

<h2>Key Insights</h2>

<p>Both variants converged around a 10–11% conversion rate regardless of whether they were on a service page or location page. This told me that the "ceiling" for Care Tile engagement was roughly the same across page types. The difference in lift percentages (57% vs. 176%) was driven by how poorly the control performed on each page, not by a fundamental difference in user behavior.</p>

<p>I also observed that the number of rows of providers displayed in the tiles didn't significantly impact conversions.</p>
<p>Most users clicked the "View All" button or the location search rather than individual provider cards. This insight led me to recommend a single-row implementation, which maximized the conversion benefit while minimizing disruption to the content that stakeholders valued.</p>

<h2>Recommendation &amp; Outcome</h2>

<p>Based on these results, I recommended moving forward with testing a single-row Care Tile implementation positioned above the page content across all service and location pages. This configuration offered the best balance: it captured the conversion uplift demonstrated in the test while preserving content visibility for stakeholders and users who valued the informational sections of these pages.</p>

<p>This project reinforced a principle I return to often in my UX work: meet users where their intent is highest. Follow the elephant paths. The Care Tiles didn't need a redesign, they just needed to be in the right place at the right time. A simple repositioning, validated through rigorous testing, delivered a measurable and meaningful improvement in the patient's path to care.</p>

            </article>
        </div><!--col-->
    </div><!--row-->

</div><!--contain-->
  </main>
</template>

<style scoped>

    </style>
