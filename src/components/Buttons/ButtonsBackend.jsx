import React from "react";
import PropTypes from "prop-types";
import "./Buttons.css";

const ButtonsBackend = ({ button, filter }) => {
  return (
    <div className="buttons">
      {button &&
        button.map((stack, id) => {
          return (
            <button
              type="button"
              onClick={() => filter(stack)}
              className="btn-stacks"
              key={id}
            >
              {stack}
            </button>
          );
        })}
    </div>
  );
};

ButtonsBackend.propTypes = {
  button: PropTypes.array.isRequired,
};

export default ButtonsBackend;
