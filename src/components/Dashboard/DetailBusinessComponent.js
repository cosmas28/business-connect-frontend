import React from 'react';
import PropTypes from 'prop-types';
import DashboardTitle from './../common/DashboardTitle';

const DetailBusinessComponent = props => {
    const userId = sessionStorage.getItem('userId');

    return (
        <div className="container-fluid">
            {props.deleteStatus === 204 ? (
                <div>
                    {props.deleteMsg &&
                    <div className="alert alert-success" role="alert">
                        {props.deleteMsg}
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    }
                </div>
            ) : (
                <div>
                    {props.deleteMsg &&
                    <div className="alert alert-danger" role="alert">
                        {props.deleteMsg}
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    }
                </div>
            )}
            <DashboardTitle title={props.name}/>
            <div className="row no-gutters">
                <div className="col-md-12">
                    <div className="view-right-side">
                        <div>
                            <span className="badge badge-info">{props.category}</span>
                            <span className="business-text"><span className="fa fa-map-marker"></span> {props.location}</span> &bullet;
                            <span className="business-text"><span className="fa fa-comments"></span> 4</span> &bullet;
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
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <h3 className="r-comment">4 Comments</h3>
                    <div className="comment-section">
                        <h5 className="r-username"><strong>Username</strong></h5>
                        <div>
                            <span className="business-text">July 9, 2018 AT 18:21</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Laudantium veniam exercitationem expedita laborum at
                            voluptate. Labore, voluptates totam at aut nemo deserunt
                            rem magni pariatur quos perspiciatis atque eveniet unde
                        </p>
                    </div>
                    <div className="comment-section">
                            <h5 className="r-username"><strong>Username</strong></h5>
                            <div>
                                <span className="business-text">July 9, 2018 AT 18:21</span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Laudantium veniam exercitationem expedita laborum at
                                voluptate. Labore, voluptates totam at aut nemo deserunt
                                rem magni pariatur quos perspiciatis atque eveniet unde
                            </p>
                        </div>
                    <form action="" method="post">
                        <div className="form-input-division">
                            <textarea name="business-review" id="business-review" className="register-form-input" placeholder="Write a review" rows="2"></textarea>
                        </div>
                        <div className="form-input-division">
                            <button type="submit" className="btn btn-primary">Post review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

DetailBusinessComponent.propTypes = {
    'canDelete': PropTypes.bool,
    'category': PropTypes.string,
    'deleteMsg': PropTypes.string,
    'deleteStatus': PropTypes.number,
    'location': PropTypes.string,
    'name': PropTypes.string,
    'onDelete': PropTypes.func,
    'ownerName': PropTypes.string,
    'summary': PropTypes.string
};

export default DetailBusinessComponent;
