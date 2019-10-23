import React from "react";
import { FaSignOutAlt, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
  IoMdHome,
  IoIosAdd,
  IoIosListBox,
  IoIosSettings
} from "react-icons/io";
import PropTypes from "prop-types";

import "./NavBarLink.css";

const Icons = {
  add: <IoIosAdd color="#ffffff" size={26} />,
  delete: <FaRegTrashAlt size={26} />,
  edit: <FaRegEdit size={26} />,
  home: <IoMdHome size={26} />,
  ideas: <IoIosListBox size={26} />,
  logout: <FaSignOutAlt size={26} />,
  settings: <IoIosSettings size={26} />
};

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
