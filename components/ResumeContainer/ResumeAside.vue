<template>
  <div>
    <div class="resume__photo">
      <img src="~/assets/images/resume.png" alt="Dmitriy Blyndaruk" />
    </div>

    <div class="resume__name"><b>Dmitriy</b> Blyndaruk</div>
    <div class="resume__position">Web Developer</div>

    <div class="resume__profile">
      <IconHeading icon-name="user" title="Profile" bg-color="#5d64a9" icon-color="#ffffff" />
      <p>
        Dedicated and innovative web developer with a strong foundation in HTML, CSS, and JavaScript
        and {{ calculatedExpYears }} years of experience.
      </p>
      <p>
        Eager to contribute my technical skills and creative flair to a dynamic development team.
        Committed to staying abreast of emerging technologies and trends in web development, I aim
        to deliver high-quality, user-centric websites that seamlessly blend form and function.
      </p>
      <p>
        Seeking a challenging role where I can leverage my passion for coding and problem-solving to
        create engaging online experiences.
      </p>
      <div class="resume__stack">
        <p>❇️ HTML, SCSS, BEM, ES6+, Twig/Pug</p>
        <p>❇️ Tailwind, Bootstrap, Antd</p>
        <p>❇️ React (Next.js), Vue (Nuxt), Three.js/WebGL, GSAP, Webpack</p>
        <p>❇️ Node.js (Nest.js), Laravel, Wordpress</p>
        <p>❇️ Unit and E2E testing (mostly Jest/Cypress/Playwright)</p>
        <p>❇️ Git, Docker, REST API, CI/CD, Jira, Scrum, Pixel Perfect</p>
      </div>
    </div>

    <div class="resume__contacts">
      <IconHeading
        icon-name="portfolio"
        title="Portfolio"
        bg-color="#5d64a9"
        icon-color="#ffffff"
      />
      <Contact url="https://www.smartsuite.com/" title="smartsuite.com" :target="true" />
      <Contact url="https://styrtrade.com/" title="styrtrade.com" :target="true" />
      <Contact url="https://pipeflare.io/" title="pipeflare.io" :target="true" />
      <Contact url="https://globalhive.io/" title="globalhive.io" :target="true" />
      <Contact url="https://ringoo.ua/" title="ringoo.ua" :target="true" />
      <Contact url="https://ethereum-express.com/" title="ethereum-express.com" :target="true" />
      <Contact url="https://uklon.com.ua/" title="uklon.com.ua" :target="true" />
      <Contact url="https://www.fortross.vc/" title="fortross.vc" :target="true" />
      <Contact url="https://poweredtemplate.com/" title="poweredtemplate.com" :target="true" />
      <Contact url="https://focusreactive.com/" title="focusreactive.com" :target="true" />
      <Contact url="https://ppsc.com.au/" title="ppsc.com.au" :target="true" />
      <Contact url="https://shlifarb.com.ua/" title="shlifarb.com.ua" :target="true" />
    </div>

    <div class="resume__contacts">
      <IconHeading icon-name="phone" title="Contacts" bg-color="#5d64a9" icon-color="#ffffff" />
      <Contact url="tel:+380661288466" title="+38 (066) 128-84-66" />
      <Contact url="mailto:dmitriy.blyndaruk@gmail.com" title="dmitriy.blyndaruk@gmail.com" />
      <Contact
        url="https://www.upwork.com/freelancers/~0180aa008a105ff243 "
        title="Upwork Profile"
        :target="true"
      />
    </div>

    <div class="resume__socials">
      <IconHeading icon-name="people" title="Socials" bg-color="#5d64a9" icon-color="#ffffff" />
      <Contact url="https://github.com/blyndaruk" title="GitHub" :target="true" />
      <Contact url="https://t.me/ndark" title="Telegram" :target="true" />
      <Contact
        url="https://www.facebook.com/profile.php?id=100001746871522"
        title="Facebook"
        :target="true"
      />
      <Contact url="https://www.linkedin.com/in/blyndaruk/" title="LinkedIn" :target="true" />
      <Contact url="skype:dmitriy.blyndaruk?chat" title="Skype" :target="true" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    calculatedExpYears() {
      const startDate = new Date('2018-01-01');
      var ageDifMs = Date.now() - startDate.getTime();
      var ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
  },
};
</script>
