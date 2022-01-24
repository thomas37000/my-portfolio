import React from "react";
import PropTypes from "prop-types";

const Buttons = ({ button, filter }) => {
  return (
    <div className="buttons">
      {button.map((techno, id) => {
        return (
          <button
            type="button"
            onClick={() => filter(techno)}
            className="btn-technos"
            key={id}
          >
            {techno}
          </button>
        );
      })}
    </div>
  );
};

Buttons.propTypes = {
  button: PropTypes.array.isRequired,
};

export default Buttons;
