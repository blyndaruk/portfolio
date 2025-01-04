<template>
  <div>
    <PageBox>
      <div class="resume">
        <div class="resume__aside">
          <ResumeContainerResumeAside />
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
              place="Materialize Labs"
              dates="FEB 2023 - present"
              position="FullStack Developer"
            >
              Fullstack Developer with experience in building and maintaining applications using Next.js for the
              frontend and Nest.js for the backend, along with Apollo and GraphQL for efficient data management.
              Successfully integrated Stripe for seamless payment processing, ensuring a secure and user-friendly
              transaction experience.
              Additionally, working on a project encompassing a React Native mobile application, contributed to
              infrastructure enhancements by assisting in the migration of the backend, Played a key role in refactoring
              and optimizing legacy application code to improve maintainability and performance.
            </Experience>

            <Experience
              place="PipeFlare"
              dates="JUL 2022 - present"
              position="Senior Web Developer"
            >
              As a web developer on a major project, I played a crucial role in a talented team,
              contributing my coding expertise to deliver impactful features. Engaging in
              collaborative efforts and embracing a proactive approach, I not only enhanced my
              technical skills but also experienced firsthand the value of teamwork in achieving
              project success. This experience emphasized the importance of a collective approach,
              showcasing the impact of a cohesive team in achieving excellence throughout various
              aspects of the project.
            </Experience>

            <Experience place="STYR Trade" dates="SEP 2022 - DEC 2024" position="Frontend Developer">
              In my role as a Frontend Developer for the past two years, I have been responsible for leading the
              frontend development of the Styr Trade website (https://styrtrade.com). This project involved overseeing
              the design and implementation of user interfaces, ensuring they were both responsive and user-friendly. I
              worked closely with back-end developers to integrate APIs and other services, providing a seamless
              experience for users across multiple devices. As the lead on this project, I was responsible for the
              architecture, maintaining code quality, optimizing performance, and ensuring scalability as the platform
              evolved.
            </Experience>

            <Experience place="Ndark Agency" dates="SEP 2020 - NOV 2024" position="Co-Founder">
              Founder and CEO of creative Ndark web agency. Working in a team of professionals in
              their fields: web designers, developers, marketers. Main goal is creation of a
              high‑quality full‑cycle products.
            </Experience>

            <Experience place="Freelance" dates="JAN 2019 - present" position="Fullstack Developer">
              Freelancing is primarily entrepreneurship and work on a wide variety of tasks,
              providing the widest range of services. Starting from design and UX/UI edits,
              development of an HTML site, setting up analytics and other simple tasks, ending up
              with building a frontend architecture, linking it with a backend, writing a server
              side, writing plugins and custom small frameworks from scratch, etc. Naturally,
              including a huge amount of communication and client management work.
            </Experience>

            <Experience place="Gremcy" dates="JUN 2021 - JUN 2022" position="Team Lead">
              Working as a Team Lead in a team of Front‑ends, we create high‑quality projects, in
              particular promo projects, e‑commerce, creative animations. Established work between
              the design team, frontend and backend.
            </Experience>

            <Experience place="Kraken" dates="JAN 2021 - JUN 2021" position="Fullstack Developer">
              The work mainly consisted of creating WordPress sites from scratch, with maximum
              optimization for page speed, using amps and in close cooperation with a team of
              designers, marketers, SEOs.
            </Experience>

            <Experience
              place="Coderiver"
              dates="DEC 2017 - JUN 2020"
              position="Front-end Developer"
            >
              In this company, I learned how to make high-quality websites, make an optimized
              products and write high-quality code. The main work was to create websites from
              scratch, support the finished products, constant training and communication with the
              team. The stack was the most diverse, both classic HTML/CSS, Javascript, Wordpress,
              and frameworks (Angular, React, Vue), Symphony, Laravel, GSAP, animations of varying
              complexity, project setup on webpack, gulp, etc.
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
            <IconHeading icon-name="skill" title="Skills" bg-color="#935667" icon-color="#ffffff" />
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
@import "Resume";
</style>
