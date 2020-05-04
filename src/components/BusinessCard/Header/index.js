import React from "react";
import PropTypes from "prop-types";
import { FaEllipsisH, FaUser } from "react-icons/fa";

import NavBarLink from "../../NavBarLink";
import Dropdown from "../../Dropdown";

import styles from "./Header.module.scss";

export const Header = ({
  showDropdown,
  onClickDropdownDeleteButton,
  onClickDropdownEditButton,
  onClickEllipsisHandler,
  businessId,
  authorName
}) => (
  <div className={styles.header}>
    <div className={styles.header__left}>
      <span className={styles.header__left__avator}>
        <FaUser size={20} color="#C0C0C0" />
      </span>
      <span className={styles.header__left__name}>{authorName}</span>
    </div>
    <div className={styles.header__right}>
      <button
        onClick={onClickEllipsisHandler}
        className={styles.header__right__button}
      >
        <FaEllipsisH size={25} color="#DCDCDC" />
      </button>
      <Dropdown status={showDropdown ? "active" : "hide"}>
        <NavBarLink
          iconName="edit"
          label="Edit"
          type="button"
          onClickLink={onClickDropdownEditButton}
        />
        <NavBarLink
          iconName="delete"
          label="Delete"
          type="button"
          onClickLink={onClickDropdownDeleteButton}
        />
      </Dropdown>
    </div>
  </div>
);

Header.propTypes = {
  showDropdown: PropTypes.bool.isRequired,
  onClickDropdownDeleteButton: PropTypes.func.isRequired,
  onClickDropdownEditButton: PropTypes.func.isRequired,
  authorName: PropTypes.string.isRequired,
  businessId: PropTypes.number.isRequired,
  onClickEllipsisHandler: PropTypes.func.isRequired
};
