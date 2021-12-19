import React from "react";
import PropTypes from "prop-types";
import { Badge } from "react-bootstrap";

const CardSkills = ({ bg, skill, text, tool }) => {
  return (
    <div>
      <Badge bg={bg} text={text}>
        {tool || skill}
      </Badge>
    </div>
  );
};

CardSkills.propTypes = {
  bg: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  text: PropTypes.string,
  tool: PropTypes.string.isRequired
};

export default CardSkills;
