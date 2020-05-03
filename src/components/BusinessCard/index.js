import React from "react";
import PropTypes from "prop-types";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from "./Content";

import styles from "./BusinessCard.module.scss";

const BusinessCard = props => {
  const {
    clickedBusinessId,
    onClickEllipsisHandler,
    onClickDropdownDeleteButton,
    onClickDropdownEditButton,
    data
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.container__wrap}>
        <Header
          clickedBusinessId={clickedBusinessId}
          onClickDropdownDeleteButton={onClickDropdownDeleteButton}
          onClickDropdownEditButton={onClickDropdownEditButton}
          authorName={data.user_name}
          businessId={data.id}
          onClickEllipsisHandler={onClickEllipsisHandler}
        />
        <Content
          name={data.name}
          category={data.category}
          summary={data.summary}
          location={data.location}
        />
        <Footer totalComments={22} totalLikes={0} />
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
