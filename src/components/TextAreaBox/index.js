import React from "react";
import PropTypes from "prop-types";

import "./TextAreaBox.css";

const TextAreaBox = props => {
  const { placeholder, rowsCount, name, handleOnChange, value } = props;

  return (
    <div className="textarea-wrap">
      <textarea
        value={value}
        onChange={handleOnChange}
        className="textarea-wrap__input"
        placeholder={placeholder}
        rows={rowsCount}
        name={name}
      />
    </div>
  );
};

TextAreaBox.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  rowsCount: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default TextAreaBox;
