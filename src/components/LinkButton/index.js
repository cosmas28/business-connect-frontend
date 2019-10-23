import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./Link.css";

const LinkButton = ({ label, url, size }) => (
  <Link className={`link-item ${size}`} to={url}>
    {label}
  </Link>
);

Link.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
  url: PropTypes.string
};

export default LinkButton;
