<template>
  <div>
    <PageBox>
      <div class="resume">
        <div class="resume__aside">
          <ResumeAside />
        </div>

        <div class="resume__content">
          <div class="resume__info-block">
            <IconHeading
              icon-name="experience"
              title="Work Experience"
              bg-color="#935667"
              icon-color="#ffffff"
            />
            <Experience
              place="Coderiver"
              dates="DEC 2017 - JUN 2020"
              position="Front-end Developer"
            >
              In this company, I learned how to make high-quality websites, make
              an optimized products and write high-quality code. The main work
              was to create websites from scratch, support the finished
              products, constant training and communication with the team. The
              stack was the most diverse, both classic HTML/CSS, Javascript,
              Wordpress, and frameworks (Angular, React, Vue), Symphony,
              Laravel, GSAP, animations of varying complexity, project setup on
              webpack, gulp, etc.
            </Experience>
            <Experience
              place="Freelance"
              dates="JAN 2019 - present"
              position="Fullstack Developer"
            >
              Freelancing is primarily entrepreneurship and work on a wide
              variety of tasks, providing the widest range of services. Starting
              from design and UX/UI edits, development of an HTML site, setting
              up analytics and other simple tasks, ending up with building a
              frontend architecture, linking it with a backend, writing a server
              side, writing plugins and custom small frameworks from scratch,
              etc. Naturally, including a huge amount of communication and
              client management work.
            </Experience>
          </div>

          <div class="resume__info-block">
            <IconHeading
              icon-name="graduation"
              title="Education"
              bg-color="#935667"
              icon-color="#ffffff"
            />
            <Education
              title="Master Degree"
              dates="SEP 2010 - JUL 2015"
              place="National University of Food Technology - Engineer Technologist of food industry"
              color="#d25e79"
            />
            <Education
              title="Diploma"
              dates="JAN 2017 - MAY 2017"
              place="Hillel IT School"
              color="#5d64a9"
            />
            <Education
              title="Diploma"
              dates="JUL 2019 - SEP 2019"
              place="Learn Javascript - 'Javascript/DOM/Interfaces Pro Course'"
              color="#7061a6"
            />
          </div>

          <div class="resume__info-block">
            <IconHeading
              icon-name="skill"
              title="Skills"
              bg-color="#935667"
              icon-color="#ffffff"
            />
            <Skills />
          </div>
        </div>
      </div>
    </PageBox>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import 'Resume';
</style>
