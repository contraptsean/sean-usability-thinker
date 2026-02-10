<template>
<main id="main-content" class="about-page">

  <!-- Hero band -->
  <section class="band band-hero">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-8">
          <RouterLink to="/" class="back-to-projects"><span class="arrow">&larr;</span> Back to Projects</RouterLink>
          <div class="hero-inner">
            <img src="@/assets/HS1.jpg" class="headshot" alt="Sean Hogan" />
            <div>
              <h1>About Me</h1>
              <p class="lead">A common thread to my UX work has been a fascination with how people actually use the systems built for them. What started in the library and expanded to the federal space, healthcare, and even hospitality spaces became an obsession with how systems of all types work.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- What I Do -->
  <section class="band">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <h2>What I Do</h2>
          <p>I help organizations understand the people they serve and turn that understanding into better services. My work tends to live at the intersection of research and strategy:</p>
          <p><strong>Uncover what's really happening.</strong> Before designing anything, I map the people, processes, and technology that shape the experience. I design and run research studies that surface the frictions of the system, and tie those research findings back to outcomes the organization cares about.</p>
          <p>I embed research throughout the project lifecycle rather than treating it as a one-time discovery exercise, and ensure there are systems in place to make research a sustainable practice.</p>
          <p><strong>Turn insights into action.</strong> Insights only matter if they change decisions. I work closely with stakeholders to turn research into concrete design and operational improvements, improvements that match organizational goals.</p>
          <p><strong>Design prototypes, MVPs, and end-to-end services.</strong> I think beyond individual screens, mapping the full journey from first contact through long-term engagement, across channels and touchpoints. I create working prototypes and engineer concept MVPs that solve issues where needed.</p>
          <p>The best outcomes come from working shoulder-to-shoulder with product managers, engineers, and subject matter experts, not handing off a report. I think it is really important for a well-rounded strategist to be able to make working technology.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Notable Outcomes -->
  <section class="band band-tinted">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <h2>Notable Outcomes</h2>
          <div class="outcomes">
            <RouterLink to="/global-direct-case-study" class="link outcome">
              <p><strong>Designed a service that generated over $1M in revenue</strong> for Colorado State University Global, creating a new way for students to take courses outside of traditional degree programs.</p>
            </RouterLink>
            <RouterLink to="/ochsner-building-case-study" class="link outcome">
              <p><strong>Built a UX research program from the ground up</strong> at Ochsner Health, one of the largest hospital networks in the Gulf South, establishing research practices across the organization.</p>
            </RouterLink>
            <RouterLink to="/nih-case-study" class="link outcome">
              <p><strong>Reshaped a national research program's strategy</strong> at the National Institutes of Health, changing the biggest bets of the All of Us Research Program based on participant trust and value research.</p>
            </RouterLink>
            <div class="outcome">
              <p><strong>Developed an award-winning design system</strong> at Florida State University Libraries, in service of developing new services for "distance users" or anyone who was using library resources online.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Education -->
  <section class="band">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <h2>Education</h2>
          <p><strong>M.S. Information</strong> - Florida State University, 2017
            <br />Graduate Certificate: <strong>Information Architecture &amp; Usability</strong> - Florida State University, 2017</p>
          <p>I studied in the school of Information at Florida State University, after getting my Bachelor's degree in Humanities from the same school. My coursework focused on <strong>usability, information architecture, and web engineering</strong>. The skills I learned and guidance I received in that program greatly contributed to how I research and design services today.</p>
        </div>
      </div>
    </div>
  </section>

 

    <!-- Quotes -->
  <section class="band band-tinted">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <h2>Quotes</h2>
         <div class="outcomes">
            <div class="outcome">
              <p><strong>" Sean’s key strength lies in his ability to work effectively with a variety of stakeholders. He has strong communication with the UX and content team, developers, and SMEs, ensuring OPM’s needs were met at each stage of the process. Sean has been key in helping OPM understand their needs for the site architecture on opm.gov effectively organizing complex content into a clear, logical, and user-friendly structure. By researching, conducting card sorting exercises, and reviewing feedback from testing, Sean was able to design navigation paths and content categories that met real user needs. Even when stakeholders have their own opinions on how to organize the content, Sean presents reasonable alternatives to OPM for feedback and acceptance. Sean is also involved in the full-site audit and is a core resource on the HR Career Portal, a new initiative to share resources and advancement to HR Practitioners."</strong></p>
              <p>Elisa Bhatia, OPM</p>
            </div>
          
            
          </div>
        </div>
      </div>
    </div>
  </section>

   <!-- Contact -->
  <section class="band ">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <h2>Get in Touch</h2>
          <p>I'm always open to conversations about research, service design, or new opportunities.</p>
          <ul class="contact-links">
            <li><a href="https://www.linkedin.com/in/sean-hogan-00159610a/" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/contraptsean" target="_blank">GitHub</a></li>
            <li><a href="mailto:sean.hogan.ux@gmail.com">sean.hogan.ux@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

</main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.about-page h1 {
  font-family: "DM Serif Display", serif;
  font-size: 2.5rem;
  color: var(--color-text-primary);
  padding-bottom: 0.5rem;
  text-align: left;
}

.about-page h2 {
  font-family: "DM Serif Display", serif;
  font-size: 1.75rem;
  color: var(--color-text-primary);
  border-bottom: 2px solid var(--color-border);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  margin-top: 0;
}

.about-page p {
  font-family: 'Libre Franklin', sans-serif;
  font-size: 1.1rem;
  line-height: 1.75;
  color: var(--color-text-secondary);
}

.about-page .lead {
  font-family: 'Libre Franklin', sans-serif;
  font-size: 1.25rem;
  line-height: 1.7;
  font-weight: 300;
  color: var(--color-text-secondary);
}

.about-page a {
  color: var(--color-accent);
  font-weight: 500;
}

.about-page a:hover {
  color: var(--color-accent-hover);
}

/* Band layout */
.band {
  padding: 4rem 0;
}

.band-hero {
  padding-top: 7rem;
  background-color: var(--color-bg-secondary);
}

.band-tinted {
  background-color: var(--color-bg-secondary);
}

/* Hero */
.hero-inner {
  display: flex;
  align-items: flex-start;
  gap: 2.5rem;
  margin-top: 1.5rem;
}

.headshot {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 3px solid var(--color-border-light);
}

/* Outcomes */
.outcomes {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.outcome {
  padding: 1.25rem 1.5rem;
  background-color: var(--color-bg-card);
  border-radius: var(--radius-card);
  border-left: 3px solid var(--color-blue);
  box-shadow: var(--shadow-sm);
  text-decoration: none;
}

.outcome p {
  margin-bottom: 0;
}

/* Contact links */
.contact-links {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 2rem;
}

.contact-links a {
  font-family: 'Libre Franklin', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
}

/* Responsive */
@media screen and (max-width: 768px) {
  .hero-inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .headshot {
    width: 120px;
    height: 120px;
  }

  .contact-links {
    flex-direction: column;
    gap: 0.75rem;
  }

  .band {
    padding: 3rem 0;
  }

  .band-hero {
    padding-top: 6rem;
  }
}
</style>
