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
        <div className="row no-gutters business-view">
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="row">
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
                </div>
                {props.ownerId.toString() === props.authUser ? (
                    <div className="row">
                        <div className="business-btn">
                            <Link className="btn btn-info" to={`/business/update/${props.id}`}>Update</Link>
                        </div>
                        <div className="business-btn">
                            <button type="button" className="btn btn-danger" onClick={() => props.onDelete(accessToken, props.id)}>Delete</button>
                        </div>
                    </div>
                ) : (
                    <p/>
                )}
            </div>
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
