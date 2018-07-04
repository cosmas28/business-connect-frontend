import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const OneBusinessView = props => {
    return (
        <div className="row no-gutters business-view">
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="view-right-side">
                <Link to={`/businesses/${props.id}`}><h3 className="">{props.name}</h3></Link>
                    <div>
                        <span className="badge badge-primary">{props.location}</span>
                        <span className="badge badge-info">{props.category}</span>
                    </div>
                    <p>
                    {props.summary}
                    </p>
                    <a className="btn btn-primary" href="single-business.html">
                        <span className="badge badge-light">4</span>Reviews
                    </a>
                </div>
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
