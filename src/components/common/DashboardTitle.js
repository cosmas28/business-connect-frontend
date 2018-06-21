import React from 'react';
import PropTypes from 'prop-types';

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

DashboardTitle.propTypes = { 'title': PropTypes.string.isRequired };

export default DashboardTitle;
