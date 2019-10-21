import React from 'react';
import PropTypes from 'prop-types';

import './Dropdown.css';

const Dropdown = props => (
  <div className="dropdown">
    <div className={`dropdown__content dropdown__content--${props.status}`}>
      <div className="dropdown__triangle"></div>
      {props.children}
    </div>
  </div>
);

Dropdown.propTypes = { status: PropTypes.string };

export default Dropdown;
