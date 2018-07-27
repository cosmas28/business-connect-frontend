// ./src/components/Dashboard/BusinessCategory.js
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DashboardNavBar from './../common/DashboardNavBar';
import Footer from './../common/Footer';
import DashboardTitle from './../common/DashboardTitle';
import OneBusinessView from './ViewBusiness/OneBusinessView';
import { fetchBusinesses, deleteBusiness } from '../../actions/businessActions';
import { deleteResponseMessages } from '../../actions/responseMessage';
import history from '../../helpers/history';
import BusinessNav from './../common/BusinessNav';

export class BusinessCategory extends React.Component {

    /**
     *
     * @param {Object} props - passed properties
     */
    constructor(props) {
        super(props);
        this.authUser = sessionStorage.getItem('userId');
        this.accessToken = sessionStorage.getItem('accessToken');
        this.state = { businessCategory: this.props.match.params.category };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ businessCategory: nextProps.match.params.category });
    }

    // execute fetchBusinesses() after the component did mount on the dom
    componentDidMount() {
        if (this.props.businesses.length === 0) {
            this.props.fetchBusinesses(this.accessToken);
        }
    }

    // executed just before the component gets removed from the DOM
    componentWillUnmount() {
        // delete any flash message on responseMessage props
        this.props.deleteMessage();
    }

    // renders JSX content
    render() {
        const filteredBusinesses = this.props.businesses.filter(business => business.category === this.state.businessCategory);

        return (
            <div className="page-wrapper">
                <DashboardNavBar/>
                <main className="main-body">
                    <div className="container-fluid">
                        {this.props.message.status_code === 204 ? (
                            <div>
                                {this.props.message.response_message &&
                                <div className="alert alert-success" role="alert">
                                    {this.props.message.response_message}
                                    <button type="button" className="close" onClick={() => this.props.deleteMessage()} data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                }
                            </div>
                        ) : (
                            <div>
                                {this.props.message.response_message &&
                                <div className="alert alert-danger" role="alert">
                                    {this.props.message.response_message}
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                }
                            </div>
                        )}
                        <DashboardTitle title={this.state.businessCategory}/>
                        <div className="row no-gutters">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="main-view-page">
                                <div className="category-tags">
                                    <BusinessNav businessList={this.props.businesses} />
                                </div>
                                {!filteredBusinesses &&
                                        <p>You have not registered a business.Please register one.</p>
                                    }
                                    {filteredBusinesses.map((business, id) => {
                                        return (
                                            <OneBusinessView
                                                key={id}
                                                authUser={this.authUser}
                                                name={business.name}
                                                category={business.category}
                                                location={business.location}
                                                onDelete={this.props.deleteBusiness}
                                                summary={business.summary}
                                                id={business.id}
                                                ownerId={business.created_by}
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
    return {
        businesses: state.businesses,
        message: state.messages
    };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        deleteBusiness: (accessToken, id) => dispatch(deleteBusiness(accessToken, id)),
        deleteMessage: () => dispatch(deleteResponseMessages()),
        fetchBusinesses: accessToken => dispatch(fetchBusinesses(accessToken))
    };
};

// use connect to put mapStateToProps and mapDispatchToProps together
export default connect(mapStateToProps, mapDispatchToProps)(BusinessCategory);