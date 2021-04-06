<template>
  <div>
    <div class="resume__photo">
      <img src="~/static/resume.png" alt="Dmitriy Blyndaruk" />
    </div>

    <div class="resume__name"><b>Dmitriy</b> Blyndaruk</div>
    <div class="resume__position">Web Developer</div>

    <div class="resume__profile">
      <IconHeading
        icon-name="user"
        title="Profile"
        bg-color="#5d64a9"
        icon-color="#ffffff"
      />
      <p>
        Building quality websites and applications with&nbsp;HTML,&nbsp;CSS, and
        JavaScript.
      </p>
      <p>
        Web Developer with 3 years of&nbsp;experience in&nbsp;developing user
        interfaces, testing, debugging, and&nbsp;training staff within eCommerce
        technologies.
      </p>
      <p>
        Proven ability in&nbsp;optimizing web&nbsp;functionality
        that&nbsp;improve data retrieval and workflow efficiencies.
      </p>
      <p>
        Seeking to further improve Front-end frameworks (React/Vue) and Back-end
        stack skills as the future full stack developer.
      </p>
    </div>

    <div class="resume__contacts">
      <IconHeading
        icon-name="phone"
        title="Contacts"
        bg-color="#5d64a9"
        icon-color="#ffffff"
      />
      <Contact url="tel:+380661288466" title="+38 (066) 128-84-66" />
      <Contact
        url="mailto:dmitriy.blyndaruk@gmail.com"
        title="dmitriy.blyndaruk@gmail.com"
      />
    </div>

    <div class="resume__socials">
      <IconHeading
        icon-name="people"
        title="Socials"
        bg-color="#5d64a9"
        icon-color="#ffffff"
      />
      <Contact
        url="https://github.com/blyndaruk"
        title="GitHub"
        :target="true"
      />
      <Contact url="https://t.me/ndark" title="Telegram" :target="true" />
      <Contact
        url="https://www.facebook.com/profile.php?id=100001746871522"
        title="Facebook"
        :target="true"
      />
      <Contact
        url="https://www.linkedin.com/in/blyndaruk/"
        title="LinkedIn"
        :target="true"
      />
      <Contact
        url="skype:dmitriy.blyndaruk?chat"
        title="Skype"
        :target="true"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>
