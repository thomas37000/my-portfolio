import React from "react";
import PropTypes from "prop-types";

export const CardSkills = ({skill }) => {
  return (
    <>
      <div>
        {skill}
      </div>
    </>
  );
};

export const CardTools = ({ tool }) => {
  return (
    <>
      <div>
        {tool}
      </div>
    </>
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