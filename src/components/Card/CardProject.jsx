import React from "react";
import PropTypes from "prop-types";
import { Badge, Button, Card } from "react-bootstrap";
import "./Card.css";

const CardProject = ({
  description,
  fini,
  github,
  image,
  link,
  project,
  title,
}) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {/* faire un ternaire fini ou pas */}
            <Badge bg="danger">{fini}</Badge>
            <Badge bg="dark">{project}</Badge>
            {description}
          </Card.Text>
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
