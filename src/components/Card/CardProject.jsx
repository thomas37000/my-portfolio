import React from "react";
import PropTypes from "prop-types";
import { Badge, Button, Card } from "react-bootstrap";
import "react-vertical-timeline-component/style.min.css";
import "./Card.css";

const CardProject = ({
  backend,
  date,
  description,
  fini,
  github,
  image,
  link,
  project,
  title,
  technos,
  projects,
}) => {
  return (
    <>
      <div className="card-container">
        <Card style={{ width: "18rem" }}>
          <div className="container-img">
            <Card.Img variant="top" src={image} className="card__img" />
          </div>

          <Card.Body className="card__info">
            <Card.Title>{title}</Card.Title>
            <Card.Text component="span">
              {/* faire un ternaire fini ou pas */}
              <Badge bg="danger">{fini}</Badge>
              <Badge bg="dark">{project}</Badge>
              <Badge bg="dark">{backend}</Badge>
            </Card.Text>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary">
              <a
                className="project-link"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo Link
              </a>
            </Button>
            <Button variant="primary">
              <a
                className="project-link"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

CardProject.propTypes = {
  // don't put isRequired if the value is null || undefined
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fini: PropTypes.string,
  github: PropTypes.string.isRequired,
  link: PropTypes.string,
  project: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default CardProject;
