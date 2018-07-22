// ./src/components/Dashboard/DetailBusinessComponent.js
import React from 'react';
import PropTypes from 'prop-types';
import DashboardTitle from './../common/DashboardTitle';

/**
 *
 * @param {Object} props - properties from parent component
 * @returns {JSX} - render JSX content
 */
const DetailBusinessComponent = props => {

    // get userId fro the local storage
    const userId = sessionStorage.getItem('userId');

    return (
        <div>
            <DashboardTitle title={props.name}/>
            <div className="row no-gutters">
                <div className="col-md-12">
                    <div className="view-right-side">
                        <div>
                            <span className="badge badge-info">{props.category}</span>
                            <span className="business-text"><span className="fa fa-map-marker"></span> {props.location}</span> |
                            <span className="business-text"><span className="fa fa-comments"></span> {props.totalReviews}</span> |
                            <span>By <span className="business-text">{props.ownerName}</span></span>
                        </div>
                        <p>
                            {props.summary}
                        </p>
                    </div>
                    <div className="business-btn">
                        <button type="button" className="btn btn-danger" onClick={props.onDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// define prop types for AddBusinessForm
DetailBusinessComponent.propTypes = {
    'canDelete': PropTypes.bool,
    'category': PropTypes.string,
    'location': PropTypes.string,
    'name': PropTypes.string,
    'onDelete': PropTypes.func,
    'ownerName': PropTypes.string,
    'summary': PropTypes.string,
    'totalReviews': PropTypes.number
};

export default DetailBusinessComponent;
