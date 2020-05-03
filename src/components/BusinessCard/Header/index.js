import React from "react";
import PropTypes from "prop-types";
import { FaEllipsisH, FaUser } from "react-icons/fa";

import NavBarLink from "../../NavBarLink";
import Dropdown from "../../Dropdown";

export const Header = ({
  clickedBusinessId,
  onClickDropdownDeleteButton,
  onClickDropdownEditButton,
  onClickEllipsisHandler,
  businessId,
  authorName
}) => (
  <React.Fragment>
    <div className="header__left">
      <div className="header__left__avator">
        <FaUser size={40} color="#C0C0C0" />
      </div>
      <h2>{authorName}</h2>
    </div>
    <div className="header__right">
      <button
        onClick={onClickEllipsisHandler}
        className="header__right__button"
      >
        <FaEllipsisH size={25} color="#DCDCDC" />
      </button>
      <Dropdown status={clickedBusinessId === businessId ? "active" : "hide"}>
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
  </React.Fragment>
);

Header.propTypes = {
  clickedBusinessId: PropTypes.number.isRequired,
  onClickDropdownDeleteButton: PropTypes.func.isRequired,
  onClickDropdownEditButton: PropTypes.func.isRequired,
  authorName: PropTypes.string.isRequired,
  businessId: PropTypes.number.isRequired,
  onClickEllipsisHandler: PropTypes.func.isRequired
};
