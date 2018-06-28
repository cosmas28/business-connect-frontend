import React from 'react';
import { connect } from 'react-redux';

import DashboardNavBar from './../common/DashboardNavBar';
import DashboardTitle from './../common/DashboardTitle';
import { fetchBusinesses } from '../../actions/businessActions';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.accessToken = sessionStorage.getItem('accessToken');
    }

    componentDidMount() {
        this.props.fetchBusinesses(this.accessToken);
    }

    render() {
        return (
            <div className="page-wrapper">
                <DashboardNavBar/>
                <main className="main-body">
                    <div className="container-fluid">
                        <DashboardTitle title="Registered Business List"/>
                        <div className="row no-gutters">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="main-view-page">
                                {this.props.businesses.map((business, id) => {
                                    return (
                                        <div className="row no-gutters business-view">
                                            <div className="col-md-12 col-sm-12 col-xs-12">
                                                <div className="view-right-side">
                                                    <h3 className="">{business.name}</h3>
                                                    <div>
                                                        <span className="badge badge-primary">{business.location}</span>
                                                        <span className="badge badge-info">{business.category}</span>
                                                    </div>
                                                    <p>
                                                    {business.summary}
                                                    </p>
                                                    <a className="btn btn-primary" href="single-business.html">
                                                        <span className="badge badge-light">4</span>Reviews
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        businesses: state.businesses
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBusinesses: accessToken => dispatch(fetchBusinesses(accessToken))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
