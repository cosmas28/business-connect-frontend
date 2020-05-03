import React from "react";
import PropTypes from "prop-types";
import { FaMapMarkerAlt } from "react-icons/fa";

import styles from "./Content.module.scss";

export const Content = ({ name, category, summary, location }) => (
  <>
    <>
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.details}>
        <span>#{category}</span>
        <div className={styles.details__location}>
          <span className={styles.details__location__icon}>
            <FaMapMarkerAlt size={16} color="#663399" />
          </span>
          <span>{location}</span>
        </div>
      </div>
    </>
    <div className={styles.summary}>{summary.slice(0, 90)}...</div>
  </>
);

Content.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  summary: PropTypes.string,
  location: PropTypes.string
};
