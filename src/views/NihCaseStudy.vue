
<template>
<main id="main-content">
    <div class="case-study article container mt-5">
    <div class="row pt-5 justify-content-center">
        <div class="col-lg-8">
            <RouterLink to="/" class="back-to-projects"><span class="arrow">&larr;</span> Back to Projects</RouterLink>
            <header>
            <h1>From Research to Redesign: How Understanding Participant Motivation Changed a National Program</h1>
            <p class="lead mt-4"><a href="https://www.figma.com/proto/7VeEN6rgNMHRftC9JYtF9z/ROResearch-Story?page-id=0%3A1&type=design&node-id=1-5595&viewport=402%2C259%2C0.33&t=UFax9nSD6ya9p28E-1&scaling=scale-down&starting-point-node-id=1%3A5595&mode=design" target="_blank">"Research Highlights Story" Prototype</a></p>
            </header>
            <article>


<h2>What the Program Was Betting On</h2>

<p>The All of Us research program at the National Institutes of Health is one of the most ambitious biomedical research efforts in the country. It asks everyday people to contribute their health data to advance medical research. Getting people to join, and getting them to stay and participate, is quite the undertaking.</p>

<p>When I joined, the program was spending millions annually on two primary strategies to attract and retain participants: monetary incentives and genetic return of results. The assumption behind both was straightforward. People participate because they get something tangible back.</p>

<p>My job was to improve participant satisfaction, engagement, and retention. But before I could improve anything, I needed to understand what was actually driving people to join, what was keeping them, and what was pushing them away.</p>

<img src="@/assets/nih-assumption-model.svg" class="w-100" />


<h2>What I Found</h2>
<p>One of my first research projects was studying participant motivation for joining the program at partner health networks, where I utilized <RouterLink to="new-orleans-bingo-case-study" class="">a research activity that I invented</RouterLink> to understand and validate hypotheses I had.</p>


<p>A major finding of the research was that trust, particularly with the government, came up over and over again, both as a motivator and de-motivator.</p>
<p>I started trying to understand and measure this trust. Through a literature review, I identified four facets that shaped whether someone would trust a government medical research program: humanity (does it feel personal?), transparency (is it honest about how data is handled?), capability (is what I get back actually valuable?), and reliability (does it deliver on its promises?). I mapped these into leading and lagging indicators so we could actually measure trust over time, not just talk about it.</p>

<!-- <img src="@/assets/nih-trust-1.png" class="w-100" />
 -->
<img src="@/assets/nih-trust-4.png" class="w-100" />

<p>Value turned out to be more complicated. Through multiple rounds of qualitative interviews, I found that what participants valued wasn't static. It changed over time. What mattered to someone at enrollment looked different six months in. To capture this, I adapted the Single Ease Question, a common usability metric, into something I called the Single Value Question. It let us measure perceived value at different points in the participant journey, giving us a much more nuanced picture than a single satisfaction score ever could.</p>

<img src="@/assets/nih-value-1.png" class="w-100" />

<p>There were things linking together in my mind. Turst and Value were interrelated in many ways, and had a big effect on both satisfaction and retention. My hypothesis was that people were willing to continue to participate and were satisfied, when both baseline trust and capability were met and when they received something valuable from the program, particularly something that matched with their motivation for joining</p>
    
<p>To study this in reassessment, I designed a large-scale satisfaction and motivation survey. Over 20,000 participants responded. I analyzed the results using R for statistical analysis and NLP tools to process the open-text responses at scale.</p>

<p>Some of quantitative findings were interesting but not shocking. Satisfaction levels were fairly consistent across demographics and program duration, with one exception: participants who had received genetic results reported about 10% higher satisfaction.</p>


<p>The qualitative data told a different story. When I looked at participants with low satisfaction or low likelihood to recommend, a theme kept surfacing. They were dissatisfied because they felt they hadn't received anything valuable from the program. Again, linking satisfaction to value.</p>
<img src="@/assets/nih-dissatisfaction-chart.svg" class="w-100" />


<p>But what did people value? To understand that, in the survey, I asked what motivated people to join the program.</p>


<p><strong>The number one reason people said they participated was not money. It was not genetic results. It was the desire to contribute to the advancement of science.</strong></p>


<img src="@/assets/nih-motivations-chart.svg" class="w-100" />


<h2>What This Meant</h2>

<p>This finding called into question the program's biggest bets. The millions going toward monetary incentives and genetic return of results weren't aligned with what actually brought people through the door. Participants weren't showing up for a gift card. They were showing up because they wanted to matter to science.</p>

<p>This also reframed the trust and value problem. If participants joined because they cared about scientific contribution, then the program's job wasn't just to give things back. It was to show participants that their contribution was making a difference.</p>

<p>When I presented these findings to senior leadership and the CXO, the reactions were mixed. Some stakeholders were ready to act on the data. Others had invested heavily in the existing incentive strategies and were understandably cautious about shifting direction.</p>

<p>What I focused on first was letting the data lead the conversation. The evidence was clear, and over time it shifted how the program thought about participant engagement and where resources should go.</p>

<p>Next, I focused on a solution to match that data. Since contribution to science was the top motivator, I saw an opening to create something that matched that motivation directly, where the existing incentives had not.</p>

<h2>What I Built</h2>

<p>The program had a commitment and a unique opportunity to return valuable things to participants. </p>

<p>I designed and proposed the "Return of Research Story," a personalized narrative that showed participants how their data was contributing to actual scientific research. Instead of a generic thank-you or a check, participants would receive a story about the research their participation made possible, along with information about how they could continue to contribute.</p>

<a href="https://www.figma.com/proto/7VeEN6rgNMHRftC9JYtF9z/ROResearch-Story?page-id=0%3A1&type=design&node-id=1-5595&viewport=402%2C259%2C0.33&t=UFax9nSD6ya9p28E-1&scaling=scale-down&starting-point-node-id=1%3A5595&mode=design"><img src="@/assets/research-story.png" class="w-100" /></a>

<p>The concept tested well in moderated usability sessions and moved into A/B testing, where it showed increased engagement with reassessment activities compared to the existing approach.</p>


<p>More broadly, this research led to a realignment of the program's engagement strategy. The trust and value metrics I developed became key indicators of program success, and the findings influenced how leadership thought about resource allocation across the program's incentive portfolio.</p>

<p>This project reinforced something I come back to often. If we build engagement strategies based on what we assume people want, we risk investing in the wrong things. If we actually ask, and then listen carefully to what the data says even when it challenges our assumptions, we can design experiences that connect with what people actually care about.</p>

            </article>
        </div><!--col-->
    </div><!--row-->

</div><!--contain-->
  </main>
</template>

<style scoped>

    </style>
