import React from "react";
import PropTypes from "prop-types";

const ProjetsWild = (props) => {
  return (
    <div>
      Mes travaux à la <h2> Wild Code School</h2>
      <div>
        Voici différents projets que j' ai réalisé en équipe à la Wild Code
        School de Nantes.
      </div>
      <div className="card">
        <h3>Women@Nantes</h3>
        <h4>Projet 3</h4>
        Création d' une application pour l' association Women@Nantes, en équipe.
        En Front-end et Back-end.
        <a
          className="project-link"
          href="https://github.com/WildCodeSchool/nts-js-202009-p3-frontend-wan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo Link
        </a>
        <a
          className="project-link"
          href="https://github.com/thomas37000/SynApi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
      <div className="card">
        <h3>Nantes Event's</h3>
        <h4>Projet 2</h4>
        Création d' un site sur React en équipe du type application qui permet
        de voir quels événements ont lieu selon la date. Nous avons importer l'
        <a
          className="project-link"
          href="https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&q=&facet=emetteur&facet=rubrique&facet=lieu&facet=ville&facet=lieu_quartier"
          target="_blank"
          rel="noopener noreferrer"
        >
          Api des événements de Nantes
        </a>
        pour récupérer les données et les afficher.
        <a
          className="project-link"
          href="https://nantes-events.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo Link
        </a>
        <a
          className="project-link"
          href="https://github.com/thomas37000/Nantes-Events"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
      <div className="card">
        <h3>île de Nantes</h3>
        <h4>Projet 1</h4>
        Création d' un site en Html / Css / Js en équipe.
        <a
          className="project-link"
          href="https://thomas37000.github.io/ileDeNantes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo Link
        </a>
        <a
          className="project-link"
          href="https://github.com/thomas37000/ileDeNantes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
};

ProjetsWild.propTypes = {};

export default ProjetsWild;
