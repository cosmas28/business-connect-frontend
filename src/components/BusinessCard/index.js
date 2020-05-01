import React from "react";
import PropTypes from "prop-types";
import { FaEllipsisH, FaComment, FaUser, FaMapMarkerAlt } from "react-icons/fa";

import NavBarLink from "../NavBarLink";
import Dropdown from "../Dropdown";

import "./BusinessCard.css";

const renderHeader = ({
  clickedBusinessId,
  id,
  onClickDropdownDeleteButton,
  onClickDropdownEditButton,
  onClickEllipsisHandler,
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
      <Dropdown status={clickedBusinessId === id ? "active" : "hide"}>
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

const renderContent = ({ name, category, summary, location }) => (
  <React.Fragment>
    <div className="content__head">
      <h3>{name}</h3>
      <div className="content__head__bottom">
        <div className="business-category">#{category}</div>
        <div className="business-location">
          <div className="business-location__icon">
            <FaMapMarkerAlt size={16} color="#A9A9A9" />
          </div>
          <div className="business-location__name">{location}</div>
        </div>
      </div>
    </div>
    <div className="content__body">{summary.slice(0, 90)}...</div>
  </React.Fragment>
);

const renderFooter = commentCount => (
  <React.Fragment>
    <div className="comment-button">
      <button className="comment__button">
        <div className="comment__button__icon">
          <FaComment size={15} color="#663399" />
        </div>
        <div className="comment-button__count">{commentCount}</div>
      </button>
    </div>
    <div className="read-more">
      <button className="read-more__button">READ MORE</button>
    </div>
  </React.Fragment>
);

const BusinessCard = props => {
  const {
    authUser,
    onDelete,
    business,
    clickedBusinessId,
    onClickEllipsisHandler,
    onClickDropdownDeleteButton,
    onClickDropdownEditButton
  } = props;
  const businessId = business.id;
  const authorName = business.user_name;
  const name = business.name;
  const category = business.category;
  const location = business.location;
  const summary = business.summary;
  const accessToken = sessionStorage.getItem("accessToken");

  return (
    <div className="business-card">
      <div className="business-card__wrap">
        <div className="business-card__header">
          {renderHeader({
            clickedBusinessId,
            businessId,
            onClickDropdownDeleteButton,
            onClickDropdownEditButton,
            onClickEllipsisHandler,
            authorName
          })}
        </div>
        <div className="business-card__content">
          {renderContent({
            category,
            location,
            name,
            summary
          })}
        </div>
        <div className="business-card__footer">{renderFooter(22)}</div>
      </div>
    </div>
  );
};

BusinessCard.propTypes = {
  authUser: PropTypes.string,
  clickedBusinessId: PropTypes.number,
  onClickDropdownDeleteButton: PropTypes.func.isRequired,
  onClickDropdownEditButton: PropTypes.func.isRequired,
  onClickEllipsisHandler: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  business: PropTypes.object
};

export default BusinessCard;
