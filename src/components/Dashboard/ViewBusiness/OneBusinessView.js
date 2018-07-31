import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 *
 * @param {Object} props - business detail properties from parent component
 * @returns {JSX} - render dashboard title bar
 */
const OneBusinessView = props => {
    const accessToken = sessionStorage.getItem('accessToken');

    return (
        <div className="col-md-6 business-view">
            <Link className="link-class" to={`/businesses/${props.id}`} >
                <div className="view-right-side">
                    <h3 className="">{props.name}</h3>
                    <div>
                        <span className="badge badge-info">{props.category} </span>
                        <span className="business-text"><span className="fa fa-map-marker"></span>  {props.location}</span>
                    </div>
                    <p>
                    {props.summary}
                    </p>
                </div>
            </Link>
            {props.ownerId.toString() === props.authUser ? (
                <div className="business-btn">
                    <Link className="btn btn-info" to={`/business/update/${props.id}`}>Update</Link>
                    <button type="button" className="btn btn-danger" onClick={() => props.onDelete(accessToken, props.id)}>Delete</button>
                </div>
            ) : (
                <p/>
            )}
        </div>
    );
};

// define prop types for OneBusinessView
OneBusinessView.propTypes = {
    'authUser': PropTypes.string,
    'category': PropTypes.string,
    'id': PropTypes.number,
    'location': PropTypes.string,
    'name': PropTypes.string,
    'onDelete': PropTypes.func,
    'ownerId': PropTypes.number,
    'summary': PropTypes.string
};

export default OneBusinessView;
