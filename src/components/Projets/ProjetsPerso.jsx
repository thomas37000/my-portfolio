import React from "react";
import PropTypes from "prop-types";

const ProjetsPerso = () => {
  return (
    <div>
      <h2>Mes travaux personnels</h2>
      <div>Voici différents projets que j' ai réalisé dernièrement</div>
      <div className="card">
        <h3>Twitter Posts</h3>
        Création d' une application sur React pour récupérer les posts venant de
        l' Api Twitter. Par exemple ici je récupère tous les posts avec le
        hashtag #bordercollie Possibilité de changer les paramètres type couleur
        background / Typographie / nombre de posts dans la sidebar
        <a
          className="project-link"
          href="https://twitter-posts.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter-post
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
        <h3>The Space Protection Alien (SPA)</h3>
        The Space Protection Alien (SPA) API Création d' une application sur
        React dy type site de rencontre en récupérant l' Api "The Space
        Protection Alien".
        <a
          className="project-link"
          href="https://codesandbox.io/s/spa-e77cb"
          target="_blank"
          rel="noopener noreferrer"
        >
          SPA
        </a>
        <a
          className="project-link"
          href="https://github.com/thomas37000/ufo/tree/main/ufo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
};

ProjetsPerso.propTypes = {};

export default ProjetsPerso;
