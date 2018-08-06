// ./src/components/common/BusinessNav.js
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 *
 * @param {Object} props - properties from parent component
 * @returns {JSX} - render business nav bar
 */
const BusinessNav = props => {
    const authUser = sessionStorage.getItem('userId');

    return (
        <ul className="nav justify-content-center business-nav">
            <li className="nav-item">
                <Link className="nav-link active" to="/dashboard">All</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to={`/user/businesses/${authUser}`}>Mine</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link btn btn-primary" to="/register_business" >Add business</Link>
            </li>
        </ul>
    );
};

// define prop types for DashboardTitle
BusinessNav.propTypes = { 'businessList': PropTypes.array.isRequired };

export default BusinessNav;
