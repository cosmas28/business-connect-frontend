import React from "react";
import PropTypes from "prop-types";
import { FaComment, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

import { Header } from "./Header";

import "./BusinessCard.css";

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
      <button className="read-more__button">
        <FaHeart size={15} />
      </button>
    </div>
  </React.Fragment>
);

const BusinessCard = props => {
  const {
    clickedBusinessId,
    onClickEllipsisHandler,
    onClickDropdownDeleteButton,
    onClickDropdownEditButton,
    data
  } = props;

  return (
    <div className="business-card">
      <div className="business-card__wrap">
        <div className="business-card__header">
          <Header
            clickedBusinessId={clickedBusinessId}
            onClickDropdownDeleteButton={onClickDropdownDeleteButton}
            onClickDropdownEditButton={onClickDropdownEditButton}
            authorName={data.user_name}
            businessId={data.id}
            onClickEllipsisHandler={onClickEllipsisHandler}
          />
        </div>
        <div className="business-card__content">{renderContent(data)}</div>
        <div className="business-card__footer">{renderFooter(22)}</div>
      </div>
    </div>
  );
};

BusinessCard.propTypes = {
  clickedBusinessId: PropTypes.number,
  onClickDropdownDeleteButton: PropTypes.func.isRequired,
  onClickDropdownEditButton: PropTypes.func.isRequired,
  onClickEllipsisHandler: PropTypes.func.isRequired,
  data: PropTypes.object
};

export default BusinessCard;
