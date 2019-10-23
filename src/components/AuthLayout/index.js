import React from "react";
import PropTypes from "prop-types";
import { FaConnectdevelop } from "react-icons/fa";

import LinkButton from "../LinkButton";

import "./AuthLayout.css";

const AuthLayout = props => {
  const { header, children, linkLabel, linkUrl, footer } = props;

  return (
    <div className="container">
      <div className="auth-wrap">
        <div className="auth-logo">
          <FaConnectdevelop size={40} color="#663399" />
        </div>
        <div className="auth-box">
          <div className="header">
            <h4>{header}</h4>
          </div>
          <div className="content">
            <form noValidate>{children}</form>
          </div>
          <div className="footer">
            <p>{footer}</p>
            <LinkButton label={linkLabel} url={linkUrl} size="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  footer: PropTypes.string,
  header: PropTypes.string.isRequired,
  linkLabel: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired
};

export default AuthLayout;
