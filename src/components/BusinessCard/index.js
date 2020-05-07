import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from "./Content";
import DeleteModal from "../DeleteModal";
import BusinessPane from "../BusinessPane";

import { deleteBusiness, updateBusiness } from "../../actions/businessActions";

import styles from "./BusinessCard.module.scss";

const BusinessCardInner = props => {
  const { data } = props;
  const accessToken = sessionStorage.getItem("accessToken");

  const dispatch = useDispatch();
  const deleteBusinessAction = useCallback(
    (accessToken, id) => dispatch(deleteBusiness(accessToken, id)),
    [dispatch]
  );

  const onUpdateBusiness = useCallback(
    (accessToken, id, inputData) =>
      dispatch(updateBusiness(accessToken, id, inputData)),
    [dispatch]
  );

  const [showDropdown, setDropdown] = useState(false);
  const [showDeleteModal, setDeleteModal] = useState(false);
  const [showSidePane, setShowSidePane] = useState(false);

  const toggleDeleteModal = () => {
    setDeleteModal(!showDeleteModal);
    toggleDropdown();
  };

  const toggleDropdown = () => setDropdown(!showDropdown);

  const onDeleteBusines = (accessToken, id) => () =>
    deleteBusinessAction(accessToken, id);

  const toggleSidePane = () => setShowSidePane(!showSidePane);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__wrap}>
          <Header
            onDelete={toggleDeleteModal}
            onEdit={toggleSidePane}
            authorName={data.user_name}
            businessId={data.id}
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
        handleOnDeleteButton={onDeleteBusines(accessToken, data.id)}
        showDeleteModal={showDeleteModal}
      />
      <BusinessPane
        onDone={toggleSidePane}
        showSidePane={showSidePane}
        business={data}
        onSubmit={onUpdateBusiness}
      />
    </>
  );
};

BusinessCardInner.propTypes = {
  data: PropTypes.object
};

export const BusinessCard = React.memo(BusinessCardInner);
