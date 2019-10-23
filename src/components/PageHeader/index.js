import React from "react";
import PropTypes from "prop-types";
import { IoIosSearch } from "react-icons/io";

import "./PageHeader.css";

const PageHeader = props => (
  <div className="header-wrap">
    <div className="logo">
      <h2 className="logo__text" to="/dashboard">
        {props.pageTitle}
      </h2>
    </div>
    <div className="search-wrap">
      <form>
        <div className="form-item">
          <div className="form-item__icon">
            <IoIosSearch />
          </div>
          <input
            type="text"
            name="search"
            className="form-item__input"
            placeholder="Search"
          />
        </div>
      </form>
    </div>
  </div>
);

PageHeader.propTypes = { pageTitle: PropTypes.string.isRequired };

export default PageHeader;
