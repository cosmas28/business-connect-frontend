import React from "react";
import PropTypes from "prop-types";
import { IoIosTrash } from "react-icons/io";

import { Modal } from "../common/Modal";

import styles from "./DeleteModal.module.scss";

const DeleteModal = props => {
  const {
    businessName,
    showDeleteModal,
    handleCancelButton,
    handleOnDeleteButton
  } = props;

  return (
    <Modal showModal={showDeleteModal} onCancel={handleCancelButton}>
      <div className={styles.content}>
        <div className={styles.content__header}>
          <IoIosTrash size={50} fontWeight={300} />
        </div>
        <div className={styles.content__warning}>
          {`Are you sure you want to delete ${businessName}?`}
        </div>
        <div className={styles.content__footer}>
          <button onClick={handleCancelButton}>CANCEL</button>
          <button onClick={handleOnDeleteButton}>DELETE</button>
        </div>
      </div>
    </Modal>
  );
};

DeleteModal.propTypes = {
  businessName: PropTypes.string,
  handleCancelButton: PropTypes.func.isRequired,
  handleOnDeleteButton: PropTypes.func.isRequired,
  showDeleteModal: PropTypes.bool.isRequired
};

export default DeleteModal;
