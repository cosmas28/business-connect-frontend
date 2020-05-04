import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from "./Content";
import DeleteModal from "../DeleteModal";

import { deleteBusiness } from "../../actions/businessActions";

import styles from "./BusinessCard.module.scss";

const BusinessCard = props => {
  const { onClickDropdownEditButton, data } = props;
  const accessToken = sessionStorage.getItem("accessToken");

  const dispatch = useDispatch();
  const deleteBusinessAction = (accessToken, id) =>
    dispatch(deleteBusiness(accessToken, id));

  const [showDropdown, setDropdown] = useState(false);
  const [showDeleteModal, setDeleteModal] = useState(false);

  const toggleDeleteModal = () => {
    setDeleteModal(!showDeleteModal);
    toggleDropdown();
  };

  const toggleDropdown = () => setDropdown(!showDropdown);
  const deleteConfirmedBusiness = useCallback(
    () => deleteBusinessAction(accessToken, data.id),
    [dispatch]
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__wrap}>
          <Header
            onClickDropdownDeleteButton={toggleDeleteModal}
            onClickDropdownEditButton={onClickDropdownEditButton}
            authorName={data.user_name}
            businessId={data.id}
            onClickEllipsisHandler={toggleDropdown}
            showDropdown={showDropdown}
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
      <DeleteModal
        businessName={data.name}
        handleCancelButton={toggleDeleteModal}
        handleOnDeleteButton={deleteConfirmedBusiness}
        showDeleteModal={showDeleteModal}
      />
    </>
  );
};

BusinessCard.propTypes = {
  onClickDropdownEditButton: PropTypes.func.isRequired,
  data: PropTypes.object
};

export default BusinessCard;
