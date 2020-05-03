import React from "react";
import PropTypes from "prop-types";
import { FaComment, FaHeart } from "react-icons/fa";

import styles from "./Footer.module.scss";

export const Footer = ({ totalComments, totalLikes }) => (
  <div className={styles.footer}>
    <div className={styles.comment}>
      <button className={styles.comment__button}>
        <div className={styles.comment__button__icon}>
          <FaComment size={15} color="#663399" />
        </div>
        <div className={styles.comment__button__count}>{totalComments}</div>
      </button>
    </div>
    <div className={styles.likes}>
      <button className={styles.likes__button}>
        <div className={styles.likes__button__count}>{totalLikes}</div>
        <div className={styles.likes__button__icon}>
          <FaHeart size={15} color="#663399" />
        </div>
      </button>
    </div>
  </div>
);

Footer.propTypes = {
  totalComments: PropTypes.number,
  totalLikes: PropTypes.number
};
