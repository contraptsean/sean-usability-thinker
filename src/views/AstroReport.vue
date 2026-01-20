<template>
<main id="main-content">
<div class="case-study container mt-5">
<div class="row pt-5 justify-content-center">
<div class="col-lg-8">
<header>
<h1 class="mb-5 display-1" id="title">UX Report: Astro at Lightspeed</h1>
</header>
<div class="blog-container">
<p></p>
<article id="content">
<h2 id="introduction">Introduction</h2>
<p>Developers use frameworks like <a href="https://astro.build/">Astro</a> to build web
    spaces,
    quickly. </p>
<p>I’m on these types of sites about every day when I'm developing:</p>
<ul>
    <li><a href="https://getbootstrap.com/">https://getbootstrap.com/</a>
    </li>
    <li><a href="https://vuejs.org/">https://vuejs.org/</a></li>
</ul>
<p>These sites serve a variety of roles: from code toolkits, to learning
    and documentations spaces, to sandboxes and code environments, to
    job boards and essentially a product page for the company. They are
    deceptively complex, which is probably why I love it.</p>
<h2 id="overview--goals">Overview &amp; Goals</h2>
<p>Astro is a javascript framework that seeks to make performant
    websites easier for developers to make. The particular technology is
    unimportant, I am interested in the <em>learnability</em> of the
    website or how easy it is for first-time users to accomplish their
    goals. </p>
<p>Astro, as a company, has an objective of drawing in new users to use
    their product, an extremely technical building tool, and are
    attempting to sell their product as “easy”. Simply put, if a
    developer has a bad user experience on the site because it is
    unfriendly to new users, they will <strong>leave</strong> and are
    unlikely to use this “easy” framework.</p>
<p>Astro bills itself as a modern development experience. </p>
<ol>
    <li>The website should allow new (to astro) developers to get
        started and learn about some of the basics quickly. </li>
    <li>The documentation should allow for research into some advanced
        topics in the framework.</li>
    <li>They advertise that they are funded and looking for developers .
        The website should allow for potential candidates to find open
        positions</li>
</ol>
<p>My goal for this post is to examine this website to generate insights
    about the <em>learnability</em> of this framework website and
    perhaps to glean some design guidelines for these types of framework
    websites in general.</p>
<h2 id="methodology">Methodology</h2>
<p>To test the learnability of the site, I am utilizing task analysis
    and having some representative users do some think-alouds, which are
    common methods of user testing. </p>
<p>This involves getting five (<a
        href="https://www.invisionapp.com/inside-design/ux-usability-research-testing/">The
        Magic Number</a>) or so representative users to talk (/think)
    aloud while they try to complete representative “tasks” or
    activities.</p>
<p>I process my think-alouds much like Paul Marty’s <a
        href="https://firstmonday.org/ojs/index.php/fm/article/download/1260/1180#m4">Usability@90MPH</a>,
    which involves some getting some representative users to test an
    interface by having them complete some tasks or activities designed
    to test some of the objectives of the interface.</p>
<p>Basically user testing doesn’t have to be daunting or complex. People
    will literally tell you what is wrong with your site. The better you
    design these activities the more you can glean from these tests, and
    there is certainly an art to the design, but if you like talking to
    people, the testing is not arduous at all.</p>
<p>For more information on developing these activities or scenarios,
    see:</p>
<ul>
    <li><strong><strong><a
                    href="https://www.nngroup.com/articles/task-scenarios-usability-testing/">Turn
                    User Goals into Task Scenarios for Usability
                    Testing</a></strong></strong> by <a
            href="https://www.nngroup.com/articles/author/marieke-mccloskey/">Marieke
            McCloskey</a> at Nielsen Norman group</li>
    <li>Mary Beth Rosson and John M. Carroll, 2009.&nbsp;<em><a
                href="https://www.academia.edu/download/30774225/Rosson_2002_sbd.pdf">Scenario
                based design</a></em></li>
</ul>
<h3 id="representative-users">Representative Users</h3>
<p>This type of framework isn’t for new developers. I’m looking for
    developerss of a variety of experience levels with no familiarity
    with Astro.</p>
<h3 id="activities">activities</h3>
<p>These activities are drawn from the goals of the website outlined
    before, and are meant to test some of the dimensions of the website
    such as the home page, the “docs” and job information.</p>
<ul>
    <li>You have a job interview coming up and you would like to build a
        portfolio, a colleague tells you about a framework they are
        enjoying, Astro. Navigate to the website and explore that as an
        option to build your portfolio.</li>
    <li>Partial Hydration in Astro is a main selling point that some
        developers have been talking about, and you would like more
        information on what exactly that is.</li>
    <li>You teach a React class, where you use a React framework that
        sounds similar, called Next. What are the differences between
        Astro and something like Nextjs?</li>
    <li>Astro has recently received funding and is looking to expand,
        look for what positions are open at the company.</li>
    <li>You want to have a list of your blog posts display on your Astro
        page by tag, how would you make that type of page and ensure it
        was rendered?</li>
</ul>
<h2 id="key-insights">Key Insights</h2>
<h3 id="the-first-scenario">the first scenario</h3>
<p>In exploration of a portfolio site, I imagined my participants would
    end up at one of the sandbox environment centers of the site, of
    which there are two pretty large portions of the site dedicated to,
    the Themes section, with a portfolio Theme:</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1648830312549/P33kSU-RP.png"
        alt="themes-port.png"></p>
<p>Or the Play section with a bunch of push-button-build-type sandboxes
    ready to spin up and mess around with in the browser:</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1648830441522/mG8AMQLX7.png"
        alt="astro-play-section.png"></p>
<p>However, people tended to gravitate towards the Docs after perusing
    the front page for a little bit, trying to find out general
    information about what Astro was. That tended to blend with the
    following two scenarios concerning the “Partial Hydration” feature,
    and the one about “React” similarities. </p>
<ol>
    <li>It might have been better to give more background into the
        service before participants tried it, but it behooves my
        research to hear how participants answered their own questions
        utilizing the site. </li>
    <li>I’m not interested in benchmarking the scenarios, only in better
        understanding how people learn about, navigate, and use this
        type of site, so seeing that conflation was actually really
        helpful in understanding the information seeking behavior</li>
</ol>
<h3 id="in-exploration-of-the-site">in exploration of the site</h3>
<blockquote>
    <p>I’m looking for this thing to tell me exactly what it is ..
        <later> still don’t know what it is..</later>
    </p>
</blockquote>
<p>The first thing people seemed to want to understand when viewing the
    new information space was what exactly it was. </p>
<p>The Astro site doesn’t put it in simple terms, aside from the main
    headline, which is non-specific about “fast websites”. The
    proceeding subtitle is filled with Jargon, and the next large
    eyecatching space has to do with namedropping partners. </p>
<p>The next space has a loading demo, showing just how
    <strong>much</strong> faster this technology was than the standard.
    And something <em>very interesting</em> happened here. No one
    watched it. It wasn’t fast enough. When faced with these loading
    elements, everyone seemed to look at the loading spinners for a
    second and read the next section.
</p>
<h3 id="on-wayfinding">on wayfinding</h3>
<blockquote>
    <p>At least this get started button worked... and now I don’t know
        what I’m looking at</p>
</blockquote>
<p>The above quote is in reference to the menu being buggy on Safari. I
    don’t have an Apple to test further, however it also highlights some
    issues with the site language in general</p>
<p>Though the navigation is in simple terms, it didn’t seem to match up
    with what participants expected, either through the top navigation
    bar, or through the links and calls to action, like mentioned above.
    Strangely, the Get started button on the front:</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1648830513067/fR6Ci4Ifj.png"
        alt="astro front.png"></p>
<p>leads to the live deployment section, aka the "Play" site seen in the
    above section.</p>
<p>It seems like most people thought it would lead them somewhere they
    would:</p>
<ol>
    <li>Learn more about the basics in simple, non-jargony terms, or
    </li>
    <li>Show them how to download or initiate the code to get started
        with the product</li>
</ol>
<blockquote>
    <p>Play maybe?</p>
</blockquote>
<blockquote>
    <p>First thing I like to see is demos</p>
</blockquote>
<p>The above quotes highlighted some interesting issues some of the
    participants had with the navigation. People didn’t really seem to
    know what Play meant, and they would go there at different times
    throughout the test, but not during the Portfolio scenario, where it
    would have informed them of that process.</p>
<p>However people did want to see “Demos” and other analogous terms for
    things that were in the Play and Build sections of the site. I think
    the site may benefit from further <a
        href="https://martech.org/website-taxonomy-guidelines-tips/">taxonomy</a>
    study in general to understand what people may call different parts
    of the site, and how better to arrange that information to help
    people find what they are looking for.</p>
<h3 id="guess-ill-go-to-the-documentation">guess ill go to the
    documentation</h3>
<blockquote>
    <p>Guess I’ll go to the documentation</p>
</blockquote>
<p>A lot of developers seemed to gravitate to the “Docs” when the answer
    to a scenario wasn’t readily apparent in the top navigation bar,
    which is generally a big knowledge base in these types of sites.</p>
<p>The docs are easy to get to. No one missed them, yet, paradoxically,
    if you click the Docs button, you end up on the Get Started page, in
    contrast to the Get Started button next to it taking you to the
    Demos.</p>
<p>Aside from Partial Hydration, my participants seemed to have a hard
    time finding what they were looking for, a hard time knowing how to
    start finding the tools they needed to understand the terms they
    docs were using, and a hard time knowing when they had found what
    they were looking for.</p>
<p>This is a really big area of the site, and this section could easily
    bear user studies and iterations on its own., so I will just offer a
    couple of observations.</p>
<blockquote>
    <p>Why would I also need a framework?</p>
</blockquote>
<blockquote>
    <p>I want to see what this renders as</p>
</blockquote>
<p>The combination of the front page and getting started section of the
    docs didn’t seem to inform users well of <em>what Astro actually
        was.</em> In fact almost no users came out of our session
    understanding the nature of the product the site was trying to sell
    or why it might be useful for them. For some of the sections and
    pages of the documentation, and some of the examples of
    functionality, people expressed wanting to see what something looked
    like, though much of it is links, text, and code exclusively.</p>
<p>The last scenario has a specific page in the documentation that
    explains the process of a “Tag” function, though obviously I was
    just interested in how users explored that question in the docs, not
    if they could find the page. Some people would find the page, skim
    through it, and move on to another page.</p>
<p>People would try the search function, and I don't believe anyone
    successfully found what they were looking for utilizing either it or
    the Find function. One user went to the Astro Vs X page to search
    for the comparison to Next JS scenario and couldn’t fund it, not
    because it wasn't there, but because there were <em>27
        instances</em> of react on the page, which the user didn't want
    to filter.</p>
<h3 id="big-wins">big wins</h3>
<p>Not everything went poorly, there were a couple of the activities
    that the users completed easily.</p>
<p><strong>Partial Hydration</strong></p>
<p>There are references to this function on the homepage and a whole
    section called “Core Concepts” in the documentation dedicated to it.
    People had a hard time understanding what it was, but not finding
    information about it to study if they really wanted to.</p>
<p><strong>Job Postings</strong></p>
<p>Everyone expected these to be at the bottom of the homepage, and
    that’s where they are. I’m not sure if that’s because it is a common
    web convention, or because all of my participants were
    (purposefully) developers.</p>
<h2 id="recommendations">Recommendations</h2>
<h3 id="1-lead-with-examples">1. lead with examples</h3>
<p>Not everyone is the same type of learner, or has the same type of
    strengths. People can more easily get up to speed with your taxonomy
    or more complicated processes by showing them examples. Participants
    seemed to want visual examples to understand the framework in
    general, and the ui components, as well as some of the documentation
    and more “code-y” parts.</p>
<p>An example of a site that does this well is Bootstrap. On the
    Bootstrap Framework homepage, they have an <a
        href="https://getbootstrap.com/docs/5.1/examples/">Examples
        link</a>, that takes you to a page with web based examples to
    look at and try.</p>
<p>In the documentation as well, they have <a
        href="https://getbootstrap.com/docs/5.1/utilities/flex/">visual
        examples</a> with most sets of code</p>
<h3 id="2-put-things-in-simple-terms">2. put things in simple terms</h3>
<p> Not everyone is at 100% of their maximum mental capacity 100% of the
    time (like while tired at the end of the day or slightly distracted
    holding a puppy or something). Putting things in simple terms helps
    people understand the product or the message you are trying to send
    with your information space.</p>
<p>A lot of developers in this instance are going to go to the
    documentation to try and understand core concepts and selling points
    of products like this. It benefits the bottom line to make this
    knowledge as accessible as possible.</p>
<p><a href="https://www.11ty.dev/">Eleventy</a>, a similar framework
    does this well. They don’t really bother trying to explain the whole
    of Jamstack ecosystem and why you might use the product on the
    homepage. The do have a giant docs button:</p>
<p>That takes you to some really <a href="https://www.11ty.dev/docs/">well explained
        documentation</a> with a great search function. The next page is
    a glossary to help familiarize users with the nomenclature eleventy
    uses.</p>
<h3 id="3-decide-what-your-message-is">3. decide what your message is
</h3>
<p>When making a site to sell something or encourage use of a product or
    service, decide what the main point or top three messages the site
    should be. The information space should help users learn and
    understand this message as easily as possible. </p>
<p>Some of the most valuable space on the site is at the beginning of
    the home page. Many framework sites <a href="https://nuxtjs.org/">like this one for
        Nuxt</a> have
    architectures what this message seems to be as the first three sort
    of slides or 100% view width sections of the site, being:</p>
<ol>
    <li>It’s Intuitive</li>
    <li>It’s Easy to both learn and start</li>
    <li>It has a lot of features you might want</li>
</ol>
<p>In contrast for <a href="https://astro.build/">Astro</a>, the top
    three “slides” on the homepage seem to indicate</p>
<ol>
    <li>A mixed message of fast websites, building fast, powerful and
        lightweight, modern but with a retro look</li>
    <li>We are legitimate</li>
    <li>We are fast</li>
</ol>
<p>In this instance, I’m not sure if this is the message Astro wants to
    send, or if this should be their primary messaging to potential
    users.</p>
<h3 id="4-let-your-users-name-things">4. let your users name things</h3>
<p>In development of a space or service, you can sort of go blind to
    your own knowledge of the system and the information architecture.
    That is to say, you are not your users. You may understand the
    system much differently than your average new learner of your
    technology.</p>
<p>Further testing of the navigation through things like <a
        href="https://info.keylimeinteractive.com/taxonomy-and-using-tree-tests-to-optimize-site-navigation-and-content-structure">Tree
        testing</a> or <a
        href="https://www.usability.gov/how-to-and-tools/methods/card-sorting.htm">Card
        Sorting</a> can help uncover how users understand and name
    things within the structure or navigation of your service. It can
    help uncover issues with not only how things are named, but how
    things are arranged in your space or navigation.</p>
<p>The <a href="https://nextjs.org/">Nextjs site</a> is an example of a
    more intuitive nomenclature and navigation pattern, it is a very
    flat type of navigation where each site module gets its own sort of
    microsite. It is not only named in a seemingly more user-friendly
    way, but easier to understand how the parts of the site relate to
    each other in general.</p>
<h2 id="conclusion">Conclusion</h2>
<p>As a newer framework, Astro faces a lot of organizational tests and
    challenges to their business from both a product development and
    user experience standpoint. With only five participants and a
    notepad, it is easily possible to let representative users of the
    product inform researchers or designers of issues with the space,
    and describe some possible better practices for these types of
    information spaces moving forward.</p>
</article>
</div><!--=blog-contain-->
</div><!--col-->
</div><!--row_-->
</div><!--contain-->
</main>

</template>

<style scoped>

</style>
