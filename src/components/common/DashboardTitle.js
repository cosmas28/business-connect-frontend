// ./src/components/common/DashboardTitle.js
import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param {Object} props - properties from parent component
 * @returns {JSX} - render dashboard title bar
 */
const DashboardTitle = props => {
    return (
        <div className="row">
            <div className="col-md-12 col-xs-12">
                <div className="account-title">
                    <h5>{props.title}</h5>
                </div>
            </div>
        </div>
    );
};

// define prop types for DashboardTitle
DashboardTitle.propTypes = { 'title': PropTypes.string };

export default DashboardTitle;
