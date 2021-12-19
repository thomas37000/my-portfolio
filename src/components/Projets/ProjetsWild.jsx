import React, { useState, useEffect } from "react";
import CardProject from "../Card/CardProject";
import "./Project.css";

const ProjetsWild = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/thomas37000/my-portfolio/main/projetsWild.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("wild projects", data.wild);
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
      Mes travaux à la <h2> Wild Code School</h2>
      <div>
        Voici différents projets que j' ai réalisé en équipe à la Wild Code
        School de Nantes.
      </div>
      {fetchJsonProjects}
    </section>
  );
};

export default ProjetsWild;
