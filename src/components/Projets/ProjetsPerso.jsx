import React, { useState, useEffect } from "react";
import { api } from "../../api/api";
import CardProject from "../Card/CardProject";
import "./Project.css";

const ProjetsPerso = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjects(data.perso);
      });
  }, []);

  const fetchJsonProjects =
    projects &&
    projects.map((project, index) => {
      return <CardProject key={project.id} {...project} />;
    });

  return (
    <section>
      <h2>Mes travaux personnels</h2>
      <div>Voici différents projets que j' ai réalisé dernièrement</div>
      {fetchJsonProjects}
    </section>
  );
};

export default ProjetsPerso;
