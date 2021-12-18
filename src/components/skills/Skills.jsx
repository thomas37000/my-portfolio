import React from "react";

const Skills = () => {
  return (
    <>
      <section>
        <div class="column">
          <figure class="skill">
            <img src="image/sql.jpg" alt="frontend" class="back" />
            <h2>Back-end Développeur</h2>
            <p>
              J'aime créer des requêtes SQL et relier les tables entre elles.
            </p>
            <h2 class="pink-text">les technos que j'utlise:</h2>
            <p>MySQl</p>
            <h2 class="pink-text">Dev Tools:</h2>
            <ul>
              <li>Node Js</li>
              <li>Postman</li>
              <li>MySQL Workbench</li>
            </ul>
          </figure>
        </div>

        <div class="column">
          <figure class="skill">
            <img src="image/front.png" alt="frontend" />
            <h2>Front-end Développeur</h2>
            <p>J'aime coder, apprendre et partager mon travail.</p>
            <h2 class="pink-text">les technos que j'utilise:</h2>
            <p>HTML,CSS, JAVASCRIPT, REACT, TYPESCRIPT</p>
            <h2 class="pink-text">Dev Tools:</h2>
            <ul id="front-dev-tools">
              <li class="skills-li">GitHub</li>
              <li class="skills-li">GitLab</li>
              <li class="skills-li">Vs Code</li>
              <li class="skills-li">terminal</li>
              <li class="skills-li">Bootstrap</li>
              <li class="skills-li">ReactStrap</li>
              <li class="skills-li">Npm</li>
              <li class="skills-li">Wordpress</li>
              <li class="skills-li">Codesandbox</li>
              <li class="skills-li">Codepen</li>
              <li class="skills-li">Repl.it</li>
            </ul>
          </figure>
        </div>
        <div class="column">
          <figure class="skill">
            <img src="image/scrum.png" alt="frontend" class="scrum" />
            <h2>SCRUM</h2>
            <p>
              Je travaille avec la méthode Agile Scrum idéale pour le travail en
              équipe.
            </p>

            <h2 class="pink-text">Dev Tools:</h2>
            <ul>
              <li>Agile</li>
              <li>Scrum</li>
              <li>Sprint</li>
              <li>User Stories</li>
            </ul>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Skills;
