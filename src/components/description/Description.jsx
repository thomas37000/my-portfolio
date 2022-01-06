import React from "react";
import { Badge } from "react-bootstrap";
import Spring from "../animation/Spring";
import "./Description.css";

const Description = () => {
  return (
    <div className="desc">
      <div className="desc-box">
        <div className="desc-header">
          <img
            alt="Thomas Chalanson"
            className="desktopImg"
            src="https://avatars2.githubusercontent.com/u/31045816?s=460&u=49e074ffd0a6ae0cba98ff5d7ceb6da1649fa542&v=4"
          />
          {/*********** Hello Animation ***********/}
          <Spring />
        </div>

        <div className="description">
          Je suis Thomas Chalanson
          <h1>Développeur Web Fullstack</h1> Je me perfectionne dans
          l'utilisation de Javascript / React avec
          <Badge bg="primary" className="eslint">
            esLint
          </Badge>
          et ce secteur me passionne.
        </div>
        <div className="description">
          A côté de ça, comme hobby, j'ai créé un label de Techno où je produis
          des artistes et vends les vinyles du label depuis 2019{" "}
          <div>
            ce qui m'a permis de développer mon aptitude avec la relation client
            que ce soit avec les distributeurs (magasins physiques ou internet),{" "}
            <div>
              durand le procédé de production avec l'usine de presse à vinyles
              et enfin dans la relation de confiance à instaurer avec les
              artistes.
            </div>
            {/* https://teknolandproduction.bandcamp.com/music */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
