import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

import './SidePane.css';

const SidePane = (props) => {
  const { title, children, handleCancelButton, showSidePane } = props;

  return (
    <div className={`sidepane ${showSidePane && 'sidepane--show'}`}>
      <div className="sidepane__header">
        <h3 className="sidepane__header__title">
          {title}
        </h3>
        <button onClick={handleCancelButton} className="sidepane__header__cancel-button">
          <FaTimes size={20} color="#663399" />
        </button>
      </div>
      <div className="sidepane__content">
        {children}
      </div>
    </div>
  );
};

SidePane.propTypes = {
  'handleCancelButton': PropTypes.func.isRequired,
  'showSidePane': PropTypes.bool.isRequired,
  'title': PropTypes.string.isRequired
};

export default SidePane;
