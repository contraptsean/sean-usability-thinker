<template>
<main id="main-content">
    <div class="case-study container mt-5">
    <div class="row pt-5 justify-content-center">
        <div class="col-lg-8">
            <RouterLink to="/" class="back-to-projects"><span class="arrow">&larr;</span> Back to Projects</RouterLink>
            <header>
            <h1>Big Idea Radar: Automating Opportunity Discovery with Agentic AI</h1>
            </header>
            <article>

<h2>The Idea</h2>

<p>I'd just finished Andrew Ng's Agentic AI course on DeepLearning.ai and was out on a run, listening to the Syntax podcast. The hosts were discussing the concept of a "second brain," and I was already thinking about what to build next for my portfolio. The two threads converged: what if I automated my own project ideation process? Instead of manually scanning news, Hacker News, and trending repos for inspiration, I could build an agentic system that aggregates live sources, synthesizes signals through an LLM, and delivers concrete, buildable business opportunities to my inbox every morning.</p>

<p>That weekend, <a href="https://big-idea.netlify.app/">I built it.</a></p>

<img src="@/assets/big-idea-radar-1.png" class="w-100" />


<h2>How It Works</h2>

<p>Big Idea Radar is a daily pipeline that collects news from several sources, deduplicates by URL and title similarity, and sends everything to an LLM for analysis.</p>

<p>The system prompt is arguably the most important piece of the project. It encodes a structured analytical framework (pain point detection, behavioral shifts, regulatory arbitrage, market gaps, picks-and-shovels thinking) along with strict quality filters and a detailed output schema. Each run produces 5 to 10 ranked opportunities with 16 required fields: product name, one-liner, target audience, revenue model, competitive landscape, tech stack, build plan, and more.</p>

<p>A second Claude call independently re-scores each opportunity on feasibility, demand confidence, and uniqueness. This two-pass approach produces more honest rankings. The generation pass is optimistic by design, while the scoring pass is skeptical. The tension between the two gives a more useful signal, sort of like the old days of adversarial networks.</p>

<p>A lightweight memory system tracks recent ideas in a JSON file, injecting the last 7 days into each prompt as a "do not repeat" list so the output stays fresh across runs.</p>

<img src="@/assets/big-idea-arch.png" class="w-100" />


<p>The project started as a plain email digest. Once that was running, I wanted to browse and compare ideas more fluidly, so I built a <a href="https://big-idea.netlify.app/">web dashboard</a>. My first instinct was a FastAPI backend, but for an MVP with one user and static daily data, that was overkill. Instead, I wrote a build script that copies digest JSON into the frontend directory and generates a manifest file. I have it deployed as a static site on Netlify.</p>

<p>The <a href="https://big-idea.netlify.app/">frontend</a> is a single-file Vue 3 app with card-based scanning, complexity filters, search, and a slide-in detail panel for deep dives. The information architecture reflects the density of the data: the grid view stays scannable while the panel provides depth on demand.</p>

<h2>Reflection</h2>

<p>Building this in a weekend reinforced something I believe deeply, that the most interesting work happens at the intersection of systems thinking, technical execution, and a clear point of view about what's worth making.</p>

<p>My hope is that the ideas it surfaces, grounded in real current news, help me and possibly others reduce the friction between "I should build something" and "here's exactly what to build, who it's for, and how to start."</p>

<p>The <a href="https://big-idea.netlify.app/">live dashboard</a> and <a href="https://github.com/contraptsean/big-idea-generator">source code</a> are both public.</p>


</article>
        </div><!--col-->
    </div><!--row-->

</div><!--cont-->
  </main>
</template>

<style scoped>

</style>
