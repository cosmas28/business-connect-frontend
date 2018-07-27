// ./src/components/common/BusinessNav.js
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { filterCategories, filterLocations } from '../../helpers/filterMethods';

/**
 *
 * @param {Object} props - properties from parent component
 * @returns {JSX} - render business nav bar
 */
const BusinessNav = props => {
    const authUser = sessionStorage.getItem('userId');

    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link active" to="/dashboard">All</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to={`/user/businesses/${authUser}`}>Mine</Link>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categories</a>
                <div className="dropdown-menu">
                    {filterCategories(props.businessList).map((category, id) => {
                        return (
                            <Link key={id} to={`/category/${category}`} className="dropdown-item">{category}</Link>
                        );
                    })}
                </div>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Locations</a>
                <div className="dropdown-menu">
                    {filterLocations(props.businessList).map((location, id) => {
                        return (
                            <Link key={id} to={`/location/${location}`} className="dropdown-item">{location}</Link>
                        );
                    })}
                </div>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register_business" >Add business</Link>
            </li>
        </ul>
    );
};

// define prop types for DashboardTitle
BusinessNav.propTypes = { 'businessList': PropTypes.array.isRequired };

export default BusinessNav;
