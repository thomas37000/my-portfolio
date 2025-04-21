import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.css';

const ButtonNocode = () => {
  return (
    <div className='buttons'>
      <a
        href='https://thomas-chalanson---developpeur-nocode.webflow.io/'
        target='_blank'
        rel='noreferrer'
      >
        <button type='button' className='btn-nocode'>
          Portfolio Nocode
        </button>
      </a>
    </div>
  );
};

ButtonNocode.propTypes = {
  button: PropTypes.array.isRequired,
};

export default ButtonNocode;
