
<template>
<main id="main-content">
    <div class="case-study article container mt-5">
    <div class="row pt-5 justify-content-center">
        <div class="col-lg-8">
            <header>
            <h1>Designing a Self-Service Ice Cream Pickup</h1>
            </header>
            <article>
            <p class="lead">A neighborhood ice cream maker that I really like operated an unstaffed pickup shelf: customers selected ice cream from a freezer and paid via Venmo.</p>
            <p>There was no staff, no point-of-sale system, and minimal enforcement. This placed the burden of correctness, payment, and error recovery entirely on the service design, which made it an interesting case in how trust, responsibility, and compliance function when oversight is removed and design artifacts replace those normal staff behaviors you might see at a grocery store or ice cream shop.</p>
            <p>I was fascinated with the delicious process and model which relied heavily on trust and social norms, but the operators were seeing signs of breakdown: confusion about pricing and process, occasional non-payment, and operational issues like the freezer being left open. I offered to help understand the problem and offer some insights.</p>
<h2>Research</h2>

<p>I was interested in how an unstaffed service might enable customers to confidently understand the process, select, and pay, while at the same time minimizing errors, confusion, and loss.</p>

<p>To me this was a service design and research problem that translated to healthcare check-in, public kiosks, and automated retail and services of many types. It had similar concerns:</p>
<ul>
<li>Where does responsibility shift to the customer?</li>
<li>What replaces human reassurance and correction?</li>
<li>How does trust get signaled, reinforced, or broken?</li>
<li>Where do customers hesitate or abandon the process?</li>
<li>What assumptions does the service make about customer behavior?</li>
<li>Which artifacts are doing the most work (or failing to)?</li>
<li>Where are failures silent, and therefore hard to detect?</li>
<li>How do trust signals affect compliance?</li>
</ul>
<p>Initially I studied other systems of this type that I though were successful. Then I started with a set of behavioral observations, speaking to customers at a weekly pop-up and during a couple of the “high rush” times of the week.</p>

<p>I began by observing how customers interacted with the space, paying close attention to where people hesitated, reread instructions, or changed their behavior based on what others were doing. These pauses were often more revealing than outright failures. </p>

<p>I also analyzed the physical and informational artifacts: the freezer layout, pricing labels, and payment instructions, treating them as stand-ins for the staff behaviors that would normally guide the experience.</p>

<p>As I walked through the service from arrival to exit, I mapped where responsibility shifted to the customer and what the service assumed people already knew. I noticed that the service asked customers to confirm pricing, initiate payment, and self-police correct behavior without providing much reassurance that they were doing the right thing. In several cases, people appeared to rationalize uncertainty rather than resolve it, which could involve underpaying slightly, skipping confirmation, or leaving quickly to avoid embarrassment.</p>

<p>I also looked at failures that were effectively invisible. If someone didn’t pay or left the freezer open, the system provided no immediate signal to the customer or the operator. These silent failures accumulated over time as shrink, spoilage, or operational loss, without a clear moment to intervene.</p>

<h2>Design Opportunities</h2>
<p>From this research, a clear pattern emerged. Issues happened at moments where the service required commitment, such as choosing a price, sending payment, closing the freezer, without giving customers enough clarity, closure, or feedback. In staffed contexts, these moments are smoothed over by human reassurance. In this model, design artifacts had to do that work instead.</p>

<p>Rather than recommending surveillance, staffing, or punitive controls, I framed design opportunities around reducing ambiguity and reinforcing trust. This included clarifying the sequence of actions, strengthening price anchoring, providing clearer payment closure cues, and introducing lightweight physical and sensory feedback to prevent operational failures (like the freezer being left open):</p>

<h3>Issue 1: People don’t understand the process or pricing</h3>
<p><b>Causes:</b></p>
<ul>
<li>Cognitive overload</li>
<li>Poor sequencing</li>
<li>Price ambiguity (a sizing switch caused some confusion)</li>
</ul>

<p><b>Opportunities:</b></p>
<p>Clear, process instructions and step‑by‑step payment framing:</p>
        <ol>
            <li>Choose your ice cream</li>
            <li>Close the freezer</li>
            <li>Pay $26 per container via Venmo</li>
            <li>Enjoy!</li>
        </ol>
    
<p>Stronger price anchoring</p>
        <ul>
        <li>Moving to a single size and price will make for easier payment and logistics</li>
        </ul>

<p>Instruction Hierarchy</p>
        <ul>
            <li>Multiple signs and instructions were confusing</li>
            <li>Moving several sets of instruction and messaging around the freezer and payment process into one place, process and message</li>
        </ul>





<h3>Issue 2: Theft or underpayment</h3>
<p><b>Causes:</b></p>
<ul>
<li>Unclear expectations</li>
<li>Payment friction</li>
<li>Lack of closure</li>
<li>Perceived anonymity</li>
</ul>


<p><b>Opportunities:</b></p>
<p>Gentle accountability cues</p>

<p>Language shift:</p>
<ul>
<li>From “Please Venmo” and “Suggested Donation”</li>
<li>To “Pay $26 per container via Venmo”</li>
</ul>

<p>Payment closure cues</p>
<ul>
<li>“Payment sent? You’re all set.”</li>
<li>A physical marker (“Paid? Close the freezer”)</li>
</ul>



<h3>Issue 3: The freezer gets left open</h3>
<p><b>Causes:</b></p>
<ul>
<li>Divided attention</li>
<li>No feedback loop</li>
<li>No immediate consequence</li>
</ul>


<p><b>Opportunities:</b></p>

<p>Immediate sensory feedback</p>
<ul>
<li>Audible reminder when open too long</li>
<li>Strong visual cue on the door interior</li>
</ul>

<p>Instruction at the moment of action: <i>“Please close firmly to keep everything frozen.”</i></p>

<p>Physical design nudges</p>
<ul>
<li>Self-closing hinge</li>
<li>Heavier door</li>
<li>Magnetic resistance</li>
<li>Bluetooth alarm</li>
</ul>

<h2>Alternative Offering Model</h2>
<p>Finally I offered an alternative system, that relied on a different ordering and payment model to avoid some of these issues alltogether.</p>

<p>The Model involved:</p>

<ol>
<li>Setting (and marketing) flavors available for the week on social media.</li>
<li>Having a set window to order, such as through a service like hotplate. There could be weekly “drops” or a more open-ordering model.</li>
<li>Users would be able to put together an order and pay online and before picking up</li>
<li>Having set pickup windows for people to pick up orders, such as 3, 4-hour windows on Thursday, Saturday, and Sunday. Users could come by any window to pick up the order.</li>
</ol>

<p>The owner could also continue to utilize the freezer for any leftover product. The new model would eliminate many of the payment and process pain-points, while also reducing the amount of wasted ice cream and leftover flavors.</p>

<h2>Conclusion</h2>
<p>This work reinforced for me that in unstaffed services, experience is shaped less by interfaces and more by how clearly responsibility, trust, and feedback are designed. </p>

<p>Like in most systems, the breakdowns were either about the design of the system, or how the system was explained. Most breakdowns emerged where the service asked customers to commit without enough clarity or reassurance. Discovering these moments is the purpose of research and designing for these moments is where service design has the greatest impact.</p>


            </article>
        </div><!--col-->
    </div><!--row-->

</div><!--contain-->
  </main>
</template>

<style scoped>

    </style>
