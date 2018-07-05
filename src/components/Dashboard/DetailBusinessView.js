import React from 'react';
import { connect } from 'react-redux';

import DashboardNavBar from './../common/DashboardNavBar';
import DashboardTitle from './../common/DashboardTitle';
import { fetchBusinessesById } from '../../actions/businessActions';


class DetailBusinessView extends React.Component {
    constructor(props) {
        super(props);
        this.accessToken = sessionStorage.getItem('accessToken');
        this.businessId = this.props.match.params.id;
    }

    componentDidMount() {
        this.props.fetchBusinessesById(this.accessToken, this.businessId);
    }

    render () {
        return (
            <div className="page-wrapper">
                <DashboardNavBar/>
                <main className="main-body">
                    <div className="container-fluid">
                        <DashboardTitle title={this.props.business.name}/>
                        <div className="row no-gutters">
                            <div className="col-md-12">
                                <div className="view-right-side">
                                    <div>
                                        <span className="badge badge-info">{this.props.business.category}</span>
                                        <span className="business-text"><span className="fa fa-map-marker"></span> {this.props.business.location}</span> &bullet;
                                        <span className="business-text"><span className="fa fa-comments"></span> 4</span> &bullet;
                                        <span>By <span className="business-text">Business owner</span></span>
                                    </div>
                                    <p>
                                        {this.props.business.summary}
                                    </p>
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
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { business: state.business };
};

const mapDispatchToProps = (dispatch) => {
    return { fetchBusinessesById: (accessToken, id) => dispatch(fetchBusinessesById(accessToken, id)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailBusinessView);
