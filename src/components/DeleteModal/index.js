import React from "react";
import PropTypes from "prop-types";
import { IoIosTrash } from "react-icons/io";

import "./DeleteModal.css";

const DeleteModal = props => {
  const {
    businessName,
    showDeleteModal,
    handleCancelButton,
    handleOnDeleteButton
  } = props;

  return (
    <div className={`modal ${showDeleteModal && "modal--display"}`}>
      <div className="modal__content">
        <div className="modal__content__header">
          <IoIosTrash size={50} fontWeight={300} />
        </div>
        <div className="modal__content__warning">
          {`Are you sure you want to delete ${businessName}?`}
        </div>
        <div className="modal__content__footer">
          <button onClick={handleCancelButton} className="modal__cancel">
            CANCEL
          </button>
          <button onClick={handleOnDeleteButton} className="modal__delete">
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

DeleteModal.propTypes = {
  businessName: PropTypes.string,
  handleCancelButton: PropTypes.func.isRequired,
  handleOnDeleteButton: PropTypes.func.isRequired,
  showDeleteModal: PropTypes.bool.isRequired
};

export default DeleteModal;
