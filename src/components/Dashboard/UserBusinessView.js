import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import DashboardNavBar from './../common/DashboardNavBar';
import DashboardTitle from './../common/DashboardTitle';
import OneBusinessView from './ViewBusiness/OneBusinessView';
import { fetchUserBusinessesById } from '../../actions/businessActions';

class UserBusinessView extends React.Component {
    constructor(props) {
        super(props);
        this.accessToken = sessionStorage.getItem('accessToken');
        this.userId = sessionStorage.getItem('userId');
    }

    componentDidMount() {
        this.props.fetchUserBusinessesById(this.accessToken, this.userId);
    }

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
                                    {!this.props.userBusinesses &&
                                        <p>You have not registered a business.Please register one.</p>
                                    }
                                    {this.props.userBusinesses.map((business, id) => {
                                        return (
                                            <OneBusinessView
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
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        statusCode: state.userBusinesses.status_code,
        userBusinesses: state.userBusinesses
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserBusinessesById: (accessToken, userId) => dispatch(
            fetchUserBusinessesById(accessToken, userId)
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBusinessView);
