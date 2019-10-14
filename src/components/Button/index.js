import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ typeColor, label, handleOnClick, disabled }) => (
  <button
    onClick={handleOnClick}
    className={`main-button ${typeColor}-button`}
    disabled={disabled}
  >
    {label}
  </button>
);

Button.propTypes = {
  'disabled': PropTypes.string,
  'handleOnClick': PropTypes.func,
  'label': PropTypes.string.isRequired,
  'typeColor': PropTypes.string.isRequired
};

export default Button;
