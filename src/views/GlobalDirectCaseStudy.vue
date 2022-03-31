
<template>
  <main>
<div class="case-study article container mt-5">
    <div class="row pt-5 justify-content-center">
        <div class="col-lg-10">
            <h1>Global Direct Case Study</h1>
            <p class="lead"><span class="text-muted">Summary:</span> This Case Study investigates the problem of creating a new pathway for students to take courses at CSU Global. It has been live for two months and has already has a measureable impact on the institution's financial strategy.</p>
<h2>Introduction</h2>

<p>My institution had tried many times to utilize courses outside of a degree program to generate revenue, but had thusfar been unsuccessful. I was asked to work with stakeholders from the new Digital Learning department to create a solution that would work for our institution and our students.</p>

<p>I worked with a product manager (AVP), and two stakeholders, a proxy of the faculty manager and a proxy of the course development manager, to envision a catalog and enrollment process. As the sole developer and designer for the site, I was in charge of designing, creating, and iterating a solution. I received branding support before launch to ensure the product fit within the current university branding guidelines. I worked with our IT department to develop and design a portal to securely enroll and assist these students in secondary processes, such as getting transcripts for transfer credit.</p>

<h2>Exploration</h2>

 <p>To iterate an initial solution for testing, I did some environmental scans of other similar services at other universities to see what types of front-end solutions had been implemented and what might and might not work for us:</p>
<ul>
    <li>
<a href="https://docs.google.com/document/d/11TfZTwEbWAxGJ6Dqo-59Mtzj3V3KWgM8VyTsO1AsxDU/edit?usp=sharing](https://docs.google.com/document/d/11TfZTwEbWAxGJ6Dqo-59Mtzj3V3KWgM8VyTsO1AsxDU/edit?usp=sharing">Open Learning Environmental Scan</a>
    </li>
    <li>
<a href="https://docs.google.com/document/d/1q5E4NnCFEt18xEPFvNS8DP_taFuhkhBzlOO42YXkUfQ/edit?usp=sharing](https://docs.google.com/document/d/1q5E4NnCFEt18xEPFvNS8DP_taFuhkhBzlOO42YXkUfQ/edit?usp=sharing">Global Direct Architecture Notes</a>
</li>
</ul>
<h2>Process</h2>

<h3>The Catalog</h3>

<p>I created personas based on a case study of a similar service at another university [confidential ☹️]</p>

<p>Our market studies and usability personas indicated our largest initial audience may be people who wanted to supplement training as prerequisites for other programs, particularly health related ones.</p>

<p>We based initial course offerings at this audience, and centered the initial messaging around this use case.</p>

<p>I developed and iterated wireframes for what eventually became the front end catalog: <a href="https://csuglobal.edu/direct">https://csuglobal.edu/direct</a></p>

<p>There’s so much that didn’t make it into the finished product. I tried to pare down the scope to only what was absolutely necessary for students, to not cause confusion with the main site, and to try and enhance the sites ability to make conversions.</p>

<p>I want to send a shoutout to the Marketing designer <a href="https://www.jameshill.design/" target="_blank">James Hill</a>, who always is able to help when I get stuck with a particular structure or how to fit something on a screen in a pleasing way.</p>

<h3>The Portal</h3>

<p>In addition to offering a catalog for people to easily understand course and calendar options, I needed to create a pathway for them to enroll in courses and order transcripts once done with said courses. Originally, IT wanted to have students fill out this form to get access to classes:</p>

<img src="../assets/nds_application-original-workflow.png" class="w-100" />

<p>This ended up being a rough workflow, and so I envisioned a way to split the registration workflow into getting an ID, and signing up in a student portal, much like our regular students from semester to semester. In working with Josh Bodnar, a fullstack developer in IT, we agreed on this workflow for the systems, to integrate our new development into existing Campus Nexus workflows.</p>

<img src="@/assets/direct-workflow.png" class="w-100" />

<p>Here are some portal wireframes that I made to collaborate with IT in creating that part of the service (made with love and MS Paint):</p>

<img src="../assets/content_layout_1-grey_box.jpg" class="w-100" />

<img src="@/assets/content-layout-3-grey.png" class="w-100" />

<p>Eventually we settled here as far as wireframes:</p>

<img src="@/assets/content-layout-2-grey-navbar-ordertranscript.png" class="w-100" />

<p>The service launched in February, and we just got our first set of enrollments this week, so I hope to get some analytics from marketing, ask for some qualitative feedback, and do some testing on the workflow soon in order to iterate on this design.</p>

<p>I would like to use this as an opportunity to conduct more qualitative research as that has been markedly lacking in my work recently.</p>

<h2>Challenges</h2>

<ul>
<li>This wasn’t a wide open project. I had a lot of technological constraints to what we could do with our student database services. Ultimately I created my own database for courses and enrollment periods that is managed by a CMS with authentication attached to the site so stakeholders can change course information and enrollment dates as needed.</li>
<li>Because of the need for transcriptions to be tied to a student account, and refunds needing to be tied to an email in our domain (from the registrar), and the availability of private loan options, I couldn’t take a payment from the front-end (the catalog) but instead, had to enroll students in the portal. This caused a more confusing workflow that strictly necessary. Ideally, someone would:
    <ol>
    <li>Find Courses they want to take</li>
    <li>Enroll and pay for courses on the same platform</li>
    <li>Gain Access to Email Address, Portal, and Courses after payment is processed</li>
    </ol>
But Instead the process had to be closer to:
    <ol>
        <li>Find Courses on the Catalog</li>
        <li>Register for an Email Address and portal access</li>
        <li>Go to personal email to get credentials to access portal</li>
        <li>Select Courses and pay (or state private loan information)</li>
    </ol>

    <p>It is certainly a little more convoluted, but also a little different from the normal online buying sorts of conventions people might be used to.</p>
    </li>
    
<li>Lack of buy-in from other departments delayed the launch from October to February. Our initial research decided on October as an ideal start time in the academic calendar for a project like this, as far as revenue generation, based on study of a similar type of program at another institution. The portal didn't end up being done until February, so we launched the project then. This challenged our initial rollout milestones and how we measured return on investment for the project.</li>
<li>I wouldn’t say I was a “marketing” person before this project, I mostly focused on how individuals and organizations use services, but it was an interesting foray into marketing strategy and branding as part of design and development.</li>
</ul>

<h2>Takeaways</h2>

<p>This has been a lucrative project for my university. In this initial launch we have enrolled [redacted] students and have generated [redacted] in profit. Return on Investment is expected to be 33:1 per enrollment period (monthly).</p>

<p>This is perhaps the first project where I have provided others designs and helped them realize them (for the portal in this instance). Normally I use prototypes and wireframes for stakeholder feedback, and then am also the one iterating on it.</p>

<p>A big takeaway in putting this together for my portfolio, is to save all of my wireframes and usability study artifacts in the future, and to collect quotes in a document for each project.</p>
        </div>
    </div>

</div>
  </main>
</template>

<style scoped>
h2 {
    text-decoration: underline;    
}
h3 {
    font-size:1.25rem;
}
img {
    border: 1px solid #ccc;
    margin-bottom:3rem;
}
p {
    font-size:1.1rem;
}
    </style>
