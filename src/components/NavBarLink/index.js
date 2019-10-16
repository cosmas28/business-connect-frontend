import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { IoMdHome, IoIosAdd, IoIosListBox, IoIosSettings } from 'react-icons/io';
import PropTypes from 'prop-types';

import './NavBarLink.css';

const Icons = {
  'Add Business': <IoIosAdd size={26}/>,
  'Home': <IoMdHome size={26} />,
  'Logout': <FaSignOutAlt size={26} />,
  'My Businesses': <IoIosListBox size={26} />,
  'Settings': <IoIosSettings size={26} />
};

const NavBarLink = (props) => {
  const { isActive, iconName, url, label, type, onClickLink } = props;

  return (
    <div className={`nav-item nav-item--${type} ${isActive && 'nav-item--active'}`}>
        <div>{Icons[`${iconName}`]}</div>
        <NavLink onClick={onClickLink} to={url}>{label}</NavLink>
    </div>
  );
};

NavBarLink.propTypes = {
  'iconName': PropTypes.string.isRequired,
  'isActive': PropTypes.bool,
  'label': PropTypes.string.isRequired,
  'onClickLink': PropTypes.func,
  'type': PropTypes.string,
  'url': PropTypes.string.isRequired
};

export default NavBarLink;
