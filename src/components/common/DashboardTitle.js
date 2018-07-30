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
        <div className="row account-title">
            <div className="col-md-4 col-sm-12 col-xs-12">
                <h5>{props.title}</h5>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 offset-md-4">
                <form onSubmit={props.handleSearch}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="search"
                            className="form-text-input form-control"
                            placeholder="Search..."
                            onChange={props.handleInputChange}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

// define prop types for DashboardTitle
DashboardTitle.propTypes = {
    'handleInputChange': PropTypes.func,
    'handleSearch': PropTypes.func,
    'title': PropTypes.string
};

export default DashboardTitle;
