import React, { useState, useEffect } from "react";
import { api } from "../../api/api";
import CardProject from "../Card/CardProject";
import "./Project.css";

const ProjetsWild = () => {
  const [projects, setProjects] = useState([]);

  // ---------------------------------------------------------------------------
  // LIFE CYCLE
  // ---------------------------------------------------------------------------
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.wild);
      });
  }, []);

  const fetchJsonProjects =
    projects &&
    projects.map((project) => {
      return <CardProject key={project.id} {...project} />;
    });

  return (
    <section>
      <div className="bottom-projets">
        Mes travaux à la <h2> Wild Code School</h2>
        <div>
          Voici différents projets que j' ai réalisés en équipe à la Wild Code
          School de Nantes.
        </div>
      </div>
      <div className="projets-wild">{fetchJsonProjects}</div>
    </section>
  );
};

export default ProjetsWild;
