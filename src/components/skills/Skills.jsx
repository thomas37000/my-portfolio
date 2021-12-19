import React, { useState, useEffect } from "react";
import { api } from "../../api/api";
import frontend from "../../images/front.png";
import scrum from "../../images/scrum.png";
import sql from "../../images/sql.jpg";
import { CardSkills, CardTools } from "../Card/CardSkills";
import "./Skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [tools, setTools] = useState([]);
  const [back, setBack] = useState([]);
  const [agile, setAgile] = useState([]);
  const [front, setFront] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setSkills(data.skills);
        setTools(data.devTools);
        setBack(data.backend);
        setAgile(data.scrum);
        setFront(data.frontend);
      });
  }, []);

  const fetchJsonSkills =
    skills &&
    skills.map((skill) => {
      return <CardSkills key={skill.id} {...skill} />;
    });

  const fetchJsonTools =
    tools &&
    tools.map((tool) => {
      return <CardTools key={tool.id} {...tool} />;
    });

  const fetchJsonToolsBackend =
    back &&
    back.map((tool) => {
      return <CardTools key={tool.id} {...tool} />;
    });

  const fetchJsonScrum =
    agile &&
    agile.map((tool) => {
      return <CardTools key={tool.id} {...tool} />;
    });

  const fetchJsonToolsFrontend =
    front &&
    front.map((tool) => {
      return <CardTools key={tool.id} {...tool} />;
    });

  return (
    <>
      <section>
        <div className="column">
          <figure className="skill">
            <img
              src="https://monsieurecommerce.com/wp-content/uploads/2017/06/open-position-frontend-developer-dribbble-2-preview.png"
              alt="frontend"
              className="skills-img frontend"
            />
            <h2>Front-end Développeur</h2>
            <p>J'aime coder, apprendre et partager mon travail.</p>
            <h2 className="pink-text">les technos que j'utilise:</h2>
            <h2 className="pink-text">Dev Frontend Tools:</h2>
            <div>{fetchJsonToolsFrontend}</div>
            <h2 className="pink-text">Dev Editors:</h2>
            <div>{fetchJsonTools}</div>
          </figure>
        </div>
        <div className="column">
          <figure className="skill">
            <img src={sql} alt="backend" className="skills-img" />
            <h2>Back-end Développeur</h2>
            <p>
              J'aime créer des requêtes SQL et relier les tables entre elles.
            </p>
            <h2 className="pink-text">les technos que j'utlise:</h2>
            <h2 className="pink-text">Dev Backend Tools:</h2>
            <div>{fetchJsonToolsBackend}</div>
          </figure>
        </div>
        <div className="column">
          <figure className="skill">
            <img src={scrum} alt="frontend" className="skills-img" />
            <h2>SCRUM</h2>
            <p>
              Je travaille avec la méthode Agile Scrum idéale pour le travail en
              équipe.
            </p>

            <div>{fetchJsonScrum}</div>
            <div>
              <h2>Soft Skills</h2>
              {fetchJsonSkills}
            </div>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Skills;
