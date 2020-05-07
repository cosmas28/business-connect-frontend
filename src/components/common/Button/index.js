import React from "react";
import PropTypes from "prop-types";

import { Icons } from "../Icons";

import styles from "./Button.module.scss";

export const Button = props => {
  const { label, iconName, onClick, type } = props;
  return (
    <button
      className={[styles.container, styles[type]].join(" ")}
      onClick={onClick}
    >
      <span>{Icons[iconName]}</span>
      <span>{label}</span>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  iconName: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
};
