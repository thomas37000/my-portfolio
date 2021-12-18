import React from "react";
import { Card, Button } from "react-bootstrap";
import wan from "../../images/wan.jpg";
import "./Project.css";

const ProjetsWild = () => {
  return (
    <>
      Mes travaux à la <h2> Wild Code School</h2>
      <div>
        Voici différents projets que j' ai réalisé en équipe à la Wild Code
        School de Nantes.
      </div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={wan} />
        <Card.Body>
          <Card.Title>Women@Nantes</Card.Title>
          <Card.Text>
            <h4>Projet 3</h4>
            Création d' une application pour l' association Women@Nantes, en
            équipe. En Front-end et Back-end.
          </Card.Text>
          <Button variant="primary">
            <a
              className="project-link"
              href="https://github.com/WildCodeSchool/nts-js-202009-p3-frontend-wan"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo Link
            </a>
          </Button>
          <Button variant="primary">
            <a
              className="project-link"
              href="https://github.com/thomas37000/SynApi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://nantes-events.netlify.app/static/media/logo-nantes-event.b4db1e07.png"
        />
        <Card.Body>
          <Card.Title>Nantes Event's</Card.Title>
          <Card.Text>
            <h4>Projet 2</h4>
            Création d' un site sur React en équipe du type application qui
            permet de voir quels événements ont lieu selon la date. Nous avons
            importer l'
            <a
              className="project-link"
              href="https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&q=&facet=emetteur&facet=rubrique&facet=lieu&facet=ville&facet=lieu_quartier"
              target="_blank"
              rel="noopener noreferrer"
            >
              Api des événements de Nantes
            </a>
            pour récupérer les données et les afficher.
          </Card.Text>
          <Button variant="primary">
            <a
              className="project-link"
              href="https://nantes-events.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo Link
            </a>
          </Button>
          <Button variant="primary">
            <a
              className="project-link"
              href="https://github.com/thomas37000/Nantes-Events"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://www.hotel-nantes.fr/usermedia/photo-634831159348225405-1.JPG?w=412&h=365&Crop=true"
        />
        <Card.Body>
          <Card.Title>île de Nantes</Card.Title>
          <Card.Text>
            <h4>Projet 1</h4>
            Création d' un site en Html / Css / Js en équipe.
          </Card.Text>
          <Button variant="primary">
            <a
              className="project-link"
              href="https://thomas37000.github.io/ileDeNantes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo Link
            </a>
          </Button>
          <Button variant="primary">
            <a
              className="project-link"
              href="https://github.com/thomas37000/ileDeNantes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProjetsWild;
