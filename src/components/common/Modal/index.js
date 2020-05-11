import React from "react";
import PropTypes from "prop-types";

import { Button } from "../Button";

import styles from "./Modal.module.scss";

export const Modal = ({ onCancel, children, showModal }) => {
  return (
    <div
      className={[styles.modal, showModal && styles["modal--display"]].join(
        " "
      )}
    >
      <div className={styles.modal__container}>
        <div className={styles.modal__container__header}>
          <Button iconName="times" onClick={onCancel} type="secondary" />
        </div>
        <div className={styles.modal__container__content}>{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onCancel: PropTypes.func,
  showModal: PropTypes.bool
};
