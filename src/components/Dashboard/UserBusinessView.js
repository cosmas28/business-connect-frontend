import React from 'react';
import axios from "axios";
import { connect } from 'react-redux';

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
            <div>
                <DashboardNavBar/>
                <main className="main-body">
                    <div className="container-fluid">
                        <DashboardTitle title="My business"/>
                        <OneBusinessView
                            businessCategory={this.props.userBusinesses.category}
                            businessLocation={this.props.userBusinesses.location}
                            businessName={this.props.userBusinesses.name}
                            businessOwner={this.props.userBusinesses.created_by}
                            businessSummary={this.props.userBusinesses.summary}
                            errorMessage={this.props.userBusinesses.errorMessage}
                        />
                    </div>
                </main>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        userBusinesses: state.userBusinesses,
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
