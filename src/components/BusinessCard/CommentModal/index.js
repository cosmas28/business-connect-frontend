import React, { useState } from "react";
import PropTypes from "prop-types";

import { Modal } from "../../common/Modal";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Content } from "../Content";

import styles from "./CommentModal.module.scss";

export const CommentModal = ({ data, showModal, onCancel }) => {
  return (
    <Modal onCancel={onCancel} showModal={showModal}>
      <div className={styles.container}>
        <div className={styles.container__wrap}>
          <Header authorName={data.user_name} />
          <Content
            name={data.name}
            category={data.category}
            summary={data.summary}
            location={data.location}
          />
          <Footer totalComments={22} totalLikes={0} />
        </div>
      </div>
    </Modal>
  );
};

CommentModal.propTypes = {
  data: PropTypes.object,
  showModal: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired
};
