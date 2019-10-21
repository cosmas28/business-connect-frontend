import React from 'react';
import PropTypes from 'prop-types';
import { FaEllipsisH, FaComment, FaUser, FaMapMarkerAlt } from 'react-icons/fa';

import './BusinessCard.css';

const BusinessCard = props => {
  const { category, authUser, id, location, name, onDelete, ownerId, summary } = props;
  const accessToken = sessionStorage.getItem('accessToken');

  return (
    <div className="business-card">
      <div className="business-card__wrap">
        <div className="business-card__header">
          <div className="header__left">
            <div className="header__left__avator"><FaUser size={40} color="#C0C0C0" /></div>
            <h2>Cosmas Billa</h2>
          </div>
          <div className="header__right">
            <button className="header__right__button">
              <FaEllipsisH size={25} color="#DCDCDC" />
            </button>
          </div>
        </div>
        <div className="business-card__content">
          <div className="content__head">
            <h3>{name}</h3>
            <div className="content__head__bottom">
              <div className="business-category">#{category}</div>
              <div className="business-location">
                <div className="business-location__icon"><FaMapMarkerAlt size={16} color="#A9A9A9" /></div>
                <div className="business-location__name">{location}</div>
              </div>
            </div>
          </div>
          <div className="content__body">
            {summary.slice(0, 100)}...
          </div>
        </div>
        <div className="business-card__footer">
          <div className="comment-button">
            <button className="comment__button">
              <div className="comment__button__icon">
                <FaComment size={15} color="#663399"/>
              </div>
              <div className="comment-button__count">22</div>
            </button>
          </div>
          <div className="read-more">
            <button className="read-more__button">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

BusinessCard.propTypes = {
  authUser: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.number,
  location: PropTypes.string,
  name: PropTypes.string,
  onDelete: PropTypes.func,
  ownerId: PropTypes.number,
  summary: PropTypes.string
};

export default BusinessCard;
