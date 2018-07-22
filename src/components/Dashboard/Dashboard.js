// ./src/components/Dashboard/Dashboard.js
import React from 'react';
import { connect } from 'react-redux';

import DashboardNavBar from './../common/DashboardNavBar';
import Footer from './../common/Footer';
import DashboardTitle from './../common/DashboardTitle';
import OneBusinessView from './ViewBusiness/OneBusinessView';
import { fetchBusinesses } from '../../actions/businessActions';

class Dashboard extends React.Component {

    /**
     *
     * @param {Object} props - passed properties
     */
    constructor(props) {
        super(props);
        this.accessToken = sessionStorage.getItem('accessToken');
    }

    // execute fetchBusinesses() after the component did mount on the dom
    componentDidMount() {
        this.props.fetchBusinesses(this.accessToken);
    }

    // renders JSX content
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

// Maps state from store to props
const mapStateToProps = state => {
    return { businesses: state.businesses };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return { fetchBusinesses: accessToken => dispatch(fetchBusinesses(accessToken)) };
};

// use connect to put mapStateToProps and mapDispatchToProps together
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
