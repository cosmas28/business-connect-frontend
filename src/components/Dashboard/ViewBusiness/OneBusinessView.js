import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const OneBusinessView = props => {
    return (
        <div className="row no-gutters business-view">
            <Link className="link-class" to={`/businesses/${props.id}`} >
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="view-right-side">
                        <h3 className="">{props.name}</h3>
                        <div>
                            <span className="badge badge-info">{props.category} </span>
                            <span className="business-text"><span className="fa fa-map-marker"></span>  {props.location}</span> |
                            <span className="business-text"><span className="fa fa-comments"></span>  4</span> |
                            <span>By <span className="business-text">Business owner</span></span>
                        </div>
                        <p>
                        {props.summary}
                        </p>
                    </div>
                </div>
            </Link>
            <div className="business-btn">
                <button type="button" className="btn btn-danger">Delete</button>
                <button type="button" className="btn btn-light">Update</button>
            </div>
        </div>
    );
};

OneBusinessView.propTypes = {
    'category': PropTypes.string,
    'id': PropTypes.number,
    'location': PropTypes.string,
    'name': PropTypes.string,
    'summary': PropTypes.string
};

export default OneBusinessView;
