<template>
<main id="main-content">
    <div class="case-study article container mt-5">
    <div class="row pt-5 justify-content-center">
        <div class="col-lg-8">
            <RouterLink to="/" class="back-to-projects"><span class="arrow">&larr;</span> Back to Projects</RouterLink>
            <header>
            <h1>Scoop Roost: Building a Discovery Platform for Artisan Ice Cream</h1>
            </header>
            <article>

<h2>The Opportunity</h2>

<p>I was researching product ideas through my Big Idea Radar project when I noticed a pattern. Artisan ice cream brands were exploding in number, shipping nationwide through services like Goldbelly, and adopting limited-release "drop" models borrowed from streetwear. But there was no central place to discover any of it. If you wanted to know what was dropping next week from fifty different makers, you had to follow each one on Instagram and hope the algorithm showed you the post in time.</p>

<p>Untappd had solved this for craft beer. Vivino had solved it for wine. Nobody had done it for ice cream. The U.S. artisan ice cream market is valued at roughly $2.5 billion and growing, DTC frozen shipping infrastructure has matured, and dietary segmentation (GLP-1 friendly, dairy-free, high-protein) is expanding the addressable audience. The gap was real, and I decided to build into it.</p>

<p><a href="https://scoop-roost.vercel.app/">Scoop Roost</a> is a curated discovery platform that aggregates limited-edition releases from artisan ice cream brands. Consumers browse by flavor, dietary type, and region. They follow brands and get notified when new drops go live. Brands get a profile, analytics, and affiliate-tracked traffic. The revenue model runs on three streams: SaaS brand listings, affiliate commissions on facilitated orders, and curated Discovery Boxes.</p>

<img src="@/assets/scoop-roost-1.png" class="w-100" />

<h2>How I Built It</h2>

<p>I started with strategy. I wrote a full business concept report covering market sizing, competitive landscape, revenue projections, and analog platform analysis. I studied how Untappd, Vivino, SNKRS, Letterboxd, and StockX each solved the same structural problem in their categories: fragmented discovery of premium, limited-availability products. That research shaped every product decision that followed.</p>

<p>From there I wrote a go-to-market roadmap and a business operations checklist covering legal formation, financial infrastructure, brand acquisition strategy, editorial planning, and first-hire sequencing. The GTM plan runs two tracks simultaneously: curate the catalog yourself so it's useful from day one, and pursue brand partnerships in parallel so you have an amplified launch moment. The two tracks have different failure modes and cover each other.</p>

<p>After that I wrote the code.</p>

<h2>Where It Stands</h2>

<p>The core product is live at <a href="https://scoop-roost.vercel.app/">https://scoop-roost.vercel.app/</a> with a full drop calendar, filterable search, email notifications, affiliate tracking, editorial content, check-ins, wishlists, personalized recommendations, and both admin and brand-owner dashboards.</p>

<p>What comes next is not more engineering. It's execution on the business side: brand outreach, content production, and the coordinated launch sequence laid out in the roadmap.</p>

<p>This project brought together market research, product strategy, full-stack development, brand identity, and go-to-market planning. I built it end to end, from the initial opportunity analysis engine through a deployed, functional product with a documented path to revenue.</p>

</article>
        </div><!--col-->
    </div><!--row-->

</div><!--cont-->
  </main>
</template>

<style scoped>

</style>
