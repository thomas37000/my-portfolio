import React from "react";
import PropTypes from "prop-types";
import "./Buttons.css";

const ButtonsBackend = ({ backend, button, filter }) => {
  
  return (
    <>
      {backend === undefined ? (
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
      ) : null}
    </>
  );
};

ButtonsBackend.propTypes = {
  button: PropTypes.array.isRequired,
};

export default ButtonsBackend;
