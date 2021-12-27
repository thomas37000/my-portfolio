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
          Développeur Web Fullstack Javascript / React j'apprends mon futur
          métier à coder proprement avec
          <Badge bg="primary" className="eslint">
            esLint
          </Badge>
        </div>

        <div>
          et ce secteur me passionne car il faut constamment apprendre et ne pas
          se reposer sur ses lauriers.
        </div>
        <div className="description">
          A côté de ça j'ai créé un label de Techno où je produis des Artistes
          et vends les Vinyles du label depuis 2019{" "}
          <div>
            ce qui m'a permis d' apprendre la relation client que ce soit avec
            les Distributeurs (magasins physiques ou internet){" "}
            <div>
              ainsi que tout le procédé de production avec l'usine de presse à
              Vinyles et enfin la relation de confiance à instaurer avec les
              Artistes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
