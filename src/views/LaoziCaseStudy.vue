
<template>
<main id="main-content">
    <div class="case-study article container mt-5">
    <div class="row pt-5 justify-content-center">
        <div class="col-lg-8">
            <RouterLink to="/" class="back-to-projects"><span class="arrow">&larr;</span> Back to Projects</RouterLink>
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
<p>From this research, a pattern of breakdowns emerged which occurred at moments where the service required commitment such as: choosing a price, sending payment, closing the freezer. The solution could be providing enough clarity, closure, or feedback. In the absence of staff, design artifacts needed to take on the role of reassurance and correction. Fascinating.</p>


<p>Rather than introducing surveillance, staffing, or punitive controls, I focused on opportunities that reduced ambiguity while reinforcing trust and making correct behavior easier.</p>



<h3>Issue: Confusion Around Process and Pricing</h3>

<p>Customers hesitated when trying to understand how the service worked and how much ice cream cost. Multiple instructions, unclear sequencing, and a recent sizing change increased cognitive load and uncertainty.</p>

<p>An opportunity here was to simplify the service into a clear, linear flow that mirrored how a staff member might explain it. Lessining price confusion by moving to a single size and price, and consolidating instructions into one clearly prioritized message reduced the need for interpretation and guesswork.</p>


<h3>Issue: Underpayment and Missed Payments</h3>

<p>Instances of underpayment appeared driven more by uncertainty than intent. Customers often lacked clear signals that payment was required, expected, and successfully completed.</p>

<p>I focused on reinforcing expectations without undermining trust. Small language shifts clarified payment as a requirement rather than a suggestion, while lightweight payment-closure cues helped customers feel confident they had completed the process correctly.</p>


<h3>Issue: The Freezer Being Left Open</h3>
<p>The freezer being left open was largely a result of divided attention and the absence of immediate feedback. Customers had no clear signal that a mistake had occurred or that it had consequences.</p>

<p>Design opportunities here focused on in-the-moment feedback: placing instructions directly on the freezer door, introducing visual or audible cues when the freezer remained open too long, and exploring physical nudges that encouraged closure without relying on memory or enforcement.</p>

<h3>Alternative Model: Pre-Order and Scheduled Pickup</h3>

<p>As an alternative, I explored a service model that shifted selection and payment earlier in the journey.</p>
<p>Essentially, customers would order and pay online during defined windows, then pick up during scheduled timeframes. This approach reduced ambiguity around pricing and payment, minimized waste, and gave the owner greater predictability, while still allowing the freezer to be used for surplus inventory.</p>

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
