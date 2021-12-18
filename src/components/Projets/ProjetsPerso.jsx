import React from "react";
import { Card, Button } from "react-bootstrap";
import tw from "../../images/twitter posts.png";
import spa from "../../images/spa.png";
import pagination from "../../images/pagination.png";
import "./Project.css";

const ProjetsPerso = () => {
  return (
    <>
      <h2>Mes travaux personnels</h2>
      <div>Voici différents projets que j' ai réalisé dernièrement</div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pagination} />
        <Card.Body>
          <Card.Title>Simple Movie app with pagination</Card.Title>
          <Card.Text>
            Récupération d' une liste de films avec le module{" "}
            <a
              className="project-link"
              href="https://www.npmjs.com/package/react-paginate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>react-paginate</span>
            </a>{" "}
            pour n'avoir que 3 films affichés et non toute une liste
          </Card.Text>
          <Button variant="primary">
            <a
              className="project-link"
              href="https://movie-list-with-pagination.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo Link
            </a>
          </Button>
          <Button variant="primary">
            <a
              className="project-link"
              href="https://github.com/thomas37000/react-interview"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={tw} />
        <Card.Body>
          <Card.Title>Twitter Posts</Card.Title>
          <Card.Text>
            Création d' une application sur React pour récupérer les posts
            venant de l' Api Twitter. Par exemple ici je récupère tous les posts
            avec le hashtag #bordercollie Possibilité de changer les paramètres
            type couleur background / Typographie / nombre de posts dans la
            sidebar
          </Card.Text>
          <Button variant="primary">
            <a
              className="project-link"
              href="https://twitter-posts.netlify.app/"
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
        <Card.Img variant="top" src={spa} />
        <Card.Body>
          <Card.Title>The Space Protection Alien (SPA)</Card.Title>
          <Card.Text>
            The Space Protection Alien (SPA) API Création d' une application sur
            React dy type site de rencontre en récupérant l' Api "The Space
            Protection Alien".
            <a
              className="project-link"
              href="https://codesandbox.io/s/spa-e77cb"
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
              href="https://github.com/thomas37000/ufo/tree/main/ufo"
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

export default ProjetsPerso;
