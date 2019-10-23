import React from "react";
import { FaConnectdevelop } from "react-icons/fa";
import PropTypes from "prop-types";

import PageHeader from "../PageHeader/";
import SideNavBar from "../../components/SideNavBar";
import UserAvator from "../UserAvator";

import "./DashboardLayout.css";

const DashboardLayout = props => {
  const { toggleSidePane, pageTitle, children } = props;

  return (
    <div className="page-wrapper">
      <div className="side-navbar">
        <div className="wrap-logo">
          <FaConnectdevelop size={30} />
        </div>
        <SideNavBar handleAddButton={toggleSidePane} />
        <UserAvator userName="Cosmas Billa" />
      </div>
      <div className="overview">
        <PageHeader pageTitle={pageTitle} />
        {children}
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  toggleSidePane: PropTypes.func.isRequired
};

export default DashboardLayout;
