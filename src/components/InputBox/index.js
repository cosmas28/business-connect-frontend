import React from 'react';
import PropTypes from 'prop-types';

import './InputBox.css';

const InputBox = props => {
  const { type, placeholder, name, errorMessage, handleOnChange, handleOnBlur } = props;

  return (
    <div className="container">
      <input
        className={
          `text-input ${errorMessage && 'invalid-input'}`}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      />
      {
        errorMessage &&
        <div className="error-wrap">
          {errorMessage}
        </div>
      }
  </div>
  );
};

InputBox.propTypes = {
  'errorMessage': PropTypes.string,
  'handleOnBlur': PropTypes.func,
  'handleOnChange': PropTypes.func,
  'name': PropTypes.string.isRequired,
  'placeholder': PropTypes.string.isRequired,
  'type': PropTypes.string.isRequired
};

export default InputBox;
