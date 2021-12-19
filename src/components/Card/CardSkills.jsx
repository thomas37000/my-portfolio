import React from "react";
import PropTypes from "prop-types";
import { Badge } from "react-bootstrap";

export const CardSkills = ({ bg, skill, text }) => {
  return (
    <div>
      <Badge bg={bg} text={text}>
        {skill}
      </Badge>
    </div>
  );
};

export const CardTools = ({ bg, text, tool }) => {
  return (
    <div>
      <Badge bg={bg} text={text}>
        {tool}
      </Badge>
    </div>
  );
};

export const CardBackend = ({ bg, text, tool }) => {
    return (
      <div>
        <Badge bg={bg} text={text}>
          {tool}
        </Badge>
      </div>
    );
  };

CardSkills.propTypes = {
  skill: PropTypes.string.isRequired,
};

CardTools.propTypes = {
  bg: PropTypes.string.isRequired,
  text: PropTypes.string,
  tool: PropTypes.string.isRequired,
};

CardBackend.propTypes = {
    bg: PropTypes.string.isRequired,
    text: PropTypes.string,
    tool: PropTypes.string.isRequired,
  };
