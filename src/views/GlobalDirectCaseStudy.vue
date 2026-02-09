
<template>
<main id="main-content">
    <div class="case-study article container mt-5">
    <div class="row pt-5 justify-content-center">
        <div class="col-lg-8">
            <RouterLink to="/" class="back-to-projects"><span class="arrow">&larr;</span> Back to Projects</RouterLink>
            <header>
            <h1>How I Made a Million: with Global Direct</h1>
            </header>
            <article>
            <p class="lead"><a href="https://csuglobal.edu/direct/">Global Direct</a> is one of the most impactful projects I’ve worked on. It involved creating a new way for students to take courses outside of a traditional degree program. It’s been live for several months now, and the results speak for themselves. Not only has it transformed how students engage with the university, but it’s also had a measurable impact on the institution’s financial strategy.</p>

            <img src="@/assets/direct-macbook-prototype-thumb.png" class="w-100" />

<h2>The Challenge</h2>

<p>The university had tried multiple times to offer courses outside of degree programs as a revenue stream, but nothing had really worked. I was brought in to collaborate with the new Digital Learning department and create a solution that was both student-friendly and financially viable.</p>

<p>I teamed up with a product manager (AVP), a faculty manager proxy, and a course development manager proxy. As the sole developer and designer for the site, my role was to envision, build, and refine the platform. Branding support came later in the process to ensure it aligned with the university’s identity. IT was also involved in developing a secure portal for enrollment and transcript processing.</p>

<h2>Research & Discovery</h2>

 <p>Before jumping into design, I needed to understand what worked, and what didn’t, at other universities. I conducted an environmental scan of similar programs, analyzing front-end solutions and identifying best practices that could inform our approach.</p>

<p>Some of my key research findings:</p>
<ul>

    <li>Many institutions struggled with user experience in their course catalogs.</li>
    <li>Successful programs had streamlined enrollment workflows that minimized friction.</li>
    <li>Health-related courses were in high demand as prerequisites for other programs.</li>
</ul>


<p>Based on this data, we decided to tailor our initial offerings and marketing toward students looking for prerequisite training, especially in healthcare fields.</p>

<h2>Building the Experience</h2>

<h3>The Catalog</h3>

<p>A key challenge was creating an enrollment process that integrated seamlessly with existing university systems. Initially, IT wanted students to fill out a long, clunky form just to get access to courses. Through multiple iterations, we reworked the workflow into a two-step process:</p>
<ol>
    <li><b>Get an ID</b>:Students register and receive a university email.
    </li>
    <li><b>Sign up in the student portal</b>:They use this to enroll and access courses.
    </li>
</ol>



<p>This approach aligned with how traditional students registered, making it more intuitive. Collaborating with Josh Bodnar, a full-stack developer in IT, we ensured our solution fit within the existing Campus Nexus framework.</p>

<p>Here’s an early version of the form IT proposed:</p>

<img src="@/assets/nds_application-original-workflow.png" class="w-100" />

<p>And here’s the streamlined workflow we implemented:</p>

<img src="@/assets/direct-workflow.png" class="w-100" />

<img src="@/assets/content-layout-2-grey-navbar-ordertranscript.png" class="w-100" />

<h2>Challenges & Roadblocks</h2>
<h3>Technical Constraints</h3>
<p>We had to work within the limitations of the university’s student database services. To give stakeholders control over course and enrollment data, I built a separate database managed through a CMS with authentication.</p>
<h3>Payment Complexity</h3>
<p>Ideally, a student would:</p>
    <ol>
    <li>Find Courses they want to take</li>
    <li>Enroll and pay in one step</li>
    <li>Instantly get access to email, the portal, and their course</li>
    </ol>
<p>But due to institutional requirements (transcript linking, refunds, and private loan options), we had to implement a more complex flow:</p>
    <ol>
        <li>Find courses in the catalog</li>
        <li>Register for a university email and portal access</li>
        <li>Check personal email for credentials</li>
        <li>Log in to the portal, select courses, and pay</li>
    </ol>

    <p>It wasn’t as seamless as I would’ve liked, but it was the best solution given our constraints.</p>
    <h3>Delayed Launch</h3>
    <p>We originally planned to launch in October—an optimal time for revenue generation based on a comparative study of a similar program. However, delays from other departments pushed the release to February, which impacted our initial ROI projections.</p>

<h2>Impact & Results</h2>

<p>Despite the challenges, Global Direct has been a major win for the university. In just a few months, we’ve enrolled over 100 students and generated over $100,000/month in profit. Our projected return on investment for marketing, search optimization and labor? 33:1 per enrollment period (monthly).</p>

<p>One of my biggest takeaways from this project is the importance of documentation. Going forward, I plan to save all wireframes, usability study artifacts, and key stakeholder feedback to make future projects even smoother.</p>

<h2>Final Thoughts</h2>
<p>This was more than just a design and development project—it was an exploration into marketing, user experience, and institutional strategy. It pushed me to think beyond the typical scope of my work, and I’m excited to see how we can refine and expand on this success in the future.</p>
<p>Next steps? Collect more qualitative feedback, analyze workflow data, and continue iterating to make the experience even better for students.</p>
            </article>
        </div><!--col-->
    </div><!--row-->

</div><!--contain-->
  </main>
</template>

<style scoped>

    </style>
