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
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="main-view-page">
                                    <div className="single-business">
                                        <div className="row no-gutters">
                                            <div className="col-md-5">
                                                <div className="view-left-side">
                                                    <a href="">
                                                        <img className="view-image" src="http://placehold.it/700x300" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="view-right-side">
                                                    <h3 className="business-name">{this.props.business.name}</h3>
                                                    <h4>{this.props.business.owner}</h4>
                                                    <p className="business-summary">{this.props.business.summary}</p>
                                                    <div>
                                                        <i className="business-location">{this.props.business.location}</i>-
                                                        <strong className="business-category">{this.props.business.category}</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
    return { business: state.business };
};

const mapDispatchToProps = (dispatch) => {
    return { fetchBusinessesById: (accessToken, id) => dispatch(fetchBusinessesById(accessToken, id)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailBusinessView);
