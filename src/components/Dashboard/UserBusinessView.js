// ./src/components/Dashboard/AddBusiness.js
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import DashboardNavBar from './../common/DashboardNavBar';
import Footer from './../common/Footer';
import DashboardTitle from './../common/DashboardTitle';
import OneBusinessView from './ViewBusiness/OneBusinessView';
import { fetchUserBusinessesById } from '../../actions/businessActions';

class UserBusinessView extends React.Component {

    /**
     *
     * @param {Object} props - passed properties
     */
    constructor(props) {
        super(props);
        this.accessToken = sessionStorage.getItem('accessToken');
        this.userId = sessionStorage.getItem('userId');
    }

    // execute fetchUserBusinessesById() after the component did mount on the dom
    componentDidMount() {
        this.props.fetchUserBusinessesById(this.accessToken, this.userId);
    }

    // renders JSX content
    render() {
        return (
            <div className="page-wrapper">
                <DashboardNavBar/>
                <main className="main-body">
                    <div className="container-fluid">
                        <DashboardTitle title="My business(es)"/>
                         <div className="row no-gutters">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="main-view-page">
                                    {this.props.userBusinesses.status === 204 ? (
                                        <p>You have not registered a business.Please register one.</p>
                                    ) : (
                                        <div>
                                            {this.props.userBusinesses.map((business, id) => {
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
                                    )}
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
    return {
        // statusCode: state.userBusinesses.status_code,
        userBusinesses: state.userBusinesses
    };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserBusinessesById: (accessToken, userId) => dispatch(
            fetchUserBusinessesById(accessToken, userId)
        )
    };
};

// use connect to put mapStateToProps and mapDispatchToProps together
export default connect(mapStateToProps, mapDispatchToProps)(UserBusinessView);
