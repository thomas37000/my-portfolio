import React from "react";
import { Badge } from "react-bootstrap";
import frontend from "../../images/front.png";
import scrum from "../../images/scrum.png";
import sql from "../../images/sql.jpg";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <section>
        <div class="column">
          <figure class="skill">
            <img
              src="https://monsieurecommerce.com/wp-content/uploads/2017/06/open-position-frontend-developer-dribbble-2-preview.png"
              alt="frontend"
              className="skills-img frontend"
            />
            <h2>Front-end Développeur</h2>
            <p>J'aime coder, apprendre et partager mon travail.</p>
            <h2 class="pink-text">les technos que j'utilise:</h2>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width="50"
                height="50"
              />{" "}
            </a>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="typescript"
                width="50"
                height="50"
              />{" "}
            </a>
            <p>
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  width="50"
                  height="50"
                />{" "}
              </a>
              <a
                href="https://www.w3.org/html/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  width="50"
                  height="50"
                />{" "}
              </a>
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  width="50"
                  height="50"
                />{" "}
              </a>{" "}
              <a
                href="https://sass-lang.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                  alt="sass"
                  width="40"
                  height="40"
                />{" "}
              </a>
              <a
                href="https://styled-components.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img
                  src="https://styled-components.com/logo.png"
                  alt="styled-components"
                  width="50"
                  height="50"
                />{" "}
              </a>
              <a
                href="https://getbootstrap.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                  alt="bootstrap"
                  width="50"
                  height="50"
                />{" "}
              </a>
              <a
                href="https://pugjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img
                  src="https://cdn.worldvectorlogo.com/logos/pug.svg"
                  alt="pug"
                  width="50"
                  height="50"
                />{" "}
              </a>
            </p>
            <h2 class="pink-text">Dev Tools:</h2>
            <div>
              <Badge bg="primary">Vs Code</Badge>{" "}
              <Badge bg="primary">Github</Badge>{" "}
              <Badge bg="secondary">Gitlab</Badge>{" "}
              <Badge bg="danger">terminal</Badge> <Badge bg="danger">Npm</Badge>{" "}
              <Badge bg="warning" text="dark">
                Bootsrap / React-Bootsrap /ReactStrap
              </Badge>{" "}
              <Badge bg="dark">Codesanbox</Badge>{" "}
              <Badge bg="dark">Codepen</Badge> <Badge bg="dark">Repl.it</Badge>{" "}
              <Badge bg="light" text="dark">
                Wordpress
              </Badge>
            </div>
          </figure>
        </div>
        <div class="column">
          <figure class="skill">
            <img src={sql} alt="backend" className="skills-img" />
            <h2>Back-end Développeur</h2>
            <p>
              J'aime créer des requêtes SQL et relier les tables entre elles.
            </p>
            <h2 class="pink-text">les technos que j'utlise:</h2>
            <p>MySQl</p>
            <h2 class="pink-text">Dev Tools:</h2>
            <div>
              <Badge bg="success">Node Js</Badge>{" "}
              <Badge bg="secondary">MySQL Workbench</Badge>{" "}
              <Badge bg="danger">Postman</Badge>{" "}
            </div>
          </figure>
        </div>
        <div class="column">
          <figure class="skill">
            <img src={scrum} alt="frontend" className="skills-img" />
            <h2>SCRUM</h2>
            <p>
              Je travaille avec la méthode Agile Scrum idéale pour le travail en
              équipe.
            </p>

            <div>
              <Badge bg="primary">Agile</Badge>{" "}
              <Badge bg="primary">Scrum</Badge>{" "}
              <Badge bg="success">Sprint</Badge>{" "}
              <Badge bg="warning" text="dark">
                User Stories
              </Badge>{" "}
            </div>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Skills;
