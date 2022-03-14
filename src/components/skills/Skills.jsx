import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { api } from "../../api/api";
import scrum from "../../images/scrum.png";
import sql from "../../images/sql.jpg";
import { CardSkills, CardTools } from "../Card/CardSkills";
import Description from "../description/Description";
import "./Skills.css";

const Skills = () => {
  // ---------------------------------------------------------------------------
  // STATES
  // ---------------------------------------------------------------------------
  const [skills, setSkills] = useState([]);
  const [tools, setTools] = useState([]);
  const [back, setBack] = useState([]);
  const [agile, setAgile] = useState([]);
  const [front, setFront] = useState([]);

  // ---------------------------------------------------------------------------
  // LIFE CYCLE
  // ---------------------------------------------------------------------------
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
      <HashLink to="/skills">
        <section>
          <div className="column">
            <figure className="skill">
              <h2>Front-end Développeur</h2>
              <Description />
              <div className="presentation">
                <h3 className="pink-text">les technos que j'utilise:</h3>
                <div>Dev Frontend Tools:</div>
              </div>

              <div className="badges">{fetchJsonToolsFrontend}</div>
              <div className="pink-text">Dev Editors:</div>
              <div className="badges">{fetchJsonTools}</div>
            </figure>
          </div>
          <div className="column">
            <figure className="skill">
              <img src={sql} alt="backend" className="skills-img" />
              <h2>Back-end Développeur</h2>
              <p>
                J'aime créer des requêtes SQL et relier les tables entre elles.
              </p>
              <h3 className="pink-text">les technos que j'utlise:</h3>
              <div className="presentation">
                <div className="pink-text">Dev Backend Tools:</div>
              </div>

              <div className="badges badges2">{fetchJsonToolsBackend}</div>
            </figure>
          </div>
          <div className="column">
            <figure className="skill">
              <img src={scrum} alt="frontend" className="skills-img" />
              <h2>SCRUM</h2>
              <p>
                Je travaille avec la méthode Agile Scrum idéale pour le travail
                en équipe.
              </p>

              <div className="badges badges2">{fetchJsonScrum}</div>
              <div>
                <h2>Soft Skills</h2>
                <div className="badges badges2">{fetchJsonSkills}</div>
              </div>
            </figure>
          </div>
        </section>
      </HashLink>
    </>
  );
};

export default Skills;
