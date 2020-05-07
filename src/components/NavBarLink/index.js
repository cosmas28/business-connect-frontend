import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { Icons } from "../common/Icons";

import "./NavBarLink.css";

const NavBarLink = props => {
  const { isActive, iconName, url, label, type, onClickLink } = props;

  return (
    <div
      className={`nav-item nav-item--${iconName} ${isActive &&
        "nav-item--active"}`}
    >
      <div>{Icons[`${iconName}`]}</div>
      {type === "button" ? (
        <a onClick={onClickLink}>{label}</a>
      ) : (
        <NavLink onClick={onClickLink} to={url}>
          {label}
        </NavLink>
      )}
    </div>
  );
};

NavBarLink.propTypes = {
  iconName: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClickLink: PropTypes.func,
  type: PropTypes.string,
  url: PropTypes.string
};

export default NavBarLink;
