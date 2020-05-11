import React from "react";
import PropTypes from "prop-types";
import { FaEllipsisH, FaUser } from "react-icons/fa";

import Tooltip from "../../common/Tooltip";
import { Button } from "../../common/Button";

import styles from "./Header.module.scss";

export const Header = ({ onDelete, onEdit, authorName }) => {
  const tooltipContent = () => (
    <div className={styles.tooltip}>
      <Button onClick={onEdit} iconName="edit" type="primary" label="Edit" />
      <Button
        label="Delete"
        onClick={onDelete}
        iconName="delete"
        type="danger"
      />
    </div>
  );
  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <span className={styles.header__left__avator}>
          <FaUser size={20} color="#C0C0C0" />
        </span>
        <span className={styles.header__left__name}>{authorName}</span>
      </div>
      {onDelete && (
        <div className={styles.header__right}>
          <Tooltip
            placement="bottom"
            trigger="hover"
            tooltip={tooltipContent()}
          >
            <FaEllipsisH size={25} color="#DCDCDC" />
          </Tooltip>
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  authorName: PropTypes.string.isRequired
};
