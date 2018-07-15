import React from 'react';
import { connect } from 'react-redux';

import DashboardNavBar from './../common/DashboardNavBar';
import Footer from './../common/Footer';
import DashboardTitle from './../common/DashboardTitle';
import OneBusinessView from './ViewBusiness/OneBusinessView';
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
                                <div className="category-tags">
                                    <a href="single-business.html"><span className="badge">Category</span></a>
                                    <a href="#"><span className="badge">Category</span></a>
                                    <a href="#"><span className="badge">Category</span></a>
                                    <a href="#"><span className="badge">Category</span></a>
                                    <a href="#"><span className="badge">Category</span></a>
                                    <a href="#"><span className="badge">Category</span></a>
                                    <a href="#"><span className="badge">Category</span></a>
                                    <a href="#"><span className="badge">Category</span></a>
                                </div>
                                {!this.props.businesses &&
                                        <p>You have not registered a business.Please register one.</p>
                                    }
                                    {this.props.businesses.map((business, id) => {
                                        return (
                                            <OneBusinessView
                                                key={id}
                                                name={business.name}
                                                category={business.category}
                                                location={business.location}
                                                summary={business.summary}
                                                id={business.id}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { businesses: state.businesses };
};

const mapDispatchToProps = (dispatch) => {
    return { fetchBusinesses: accessToken => dispatch(fetchBusinesses(accessToken)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
