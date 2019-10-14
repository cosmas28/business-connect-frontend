// ./src/components/Dashboard/Dashboard.js
import React from 'react';
import { connect } from 'react-redux';
import JwPagination from 'jw-react-pagination';

import DashboardNavBar from './../common/DashboardNavBar';
import Footer from './../common/Footer';
import DashboardTitle from './../common/DashboardTitle';
import OneBusinessView from './ViewBusiness/OneBusinessView';
import { deleteBusiness, searchBusinesses } from '../../actions/businessActions';
import BusinessNav from './../common/BusinessNav';

export class SearchPage extends React.Component {

    /**
     *
     * @param {Object} props - passed properties
     */
    constructor(props) {
        super(props);
        this.authUser = sessionStorage.getItem('userId');
        this.accessToken = sessionStorage.getItem('accessToken');
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = { searchCriteria: this.props.match.params.search };

        // bind the onChangePage method to this React component
        this.onChangePage = this.onChangePage.bind(this);

        // store example items and current page of items in local state
        this.state = { pageOfItems: [] };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ searchCriteria: nextProps.match.params.search });
    }

    // execute searchBusinesses() after the component did mount on the dom
    componentDidMount() {
        if (this.props.searchResults.length === 0) {
            this.props.searchBusinesses(this.accessToken, this.state.searchCriteria);
        }
    }

    // executed just before the component gets removed from the DOM
    componentWillUnmount() {

        // delete any flash message on responseMessage props
        this.props.deleteMessage();
    }

    // event handler for business search input change
    handleInputChange(event) {
        const object = event.target;
        const { value: v, name: key } = object;
        this.setState({ [key]: v });
    }

    // event handler for business registration form onSubmit event
    handleSearch(event) {
        event.preventDefault();
        this.props.searchBusinesses(this.accessToken, this.state.search).then(() => {
            this.props.history.push('/search/results/' + this.state.search);
        });
    }

    onChangePage(pageOfItems) {
        // update local state with new page of items
        this.setState({ pageOfItems });
    }

    // renders JSX content
    render() {
        return (
            <div className="page-wrapper">
                <DashboardNavBar/>
                <main className="main-body">
                    <div className="container-fluid">
                        <DashboardTitle
                            handleInputChange={this.handleInputChange}
                            handleSearch={this.handleSearch}
                            title={this.state.searchCriteria}

                        />
                        <div className="row no-gutters">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="main-view-page">
                                <div className="category-tags">
                                    <BusinessNav businessList={this.props.businesses} />
                                </div>
                                <div className="row no-gutters">
                                    {!this.props.searchResults &&
                                        <p>Business nof found</p>
                                    }
                                    {this.state.pageOfItems.map((business, id) => {
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
                        <div>
                            <JwPagination
                                items={this.props.searchResults.business_list}
                                pageSize={5}
                                onChangePage={this.onChangePage}
                            />
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
        message: state.messages,
        searchResults: state.searchResults
    };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        deleteBusiness: (accessToken, id) => dispatch(deleteBusiness(accessToken, id)),
        searchBusinesses: (accessToken, search) => dispatch(searchBusinesses(accessToken, search))
    };
};

// use connect to put mapStateToProps and mapDispatchToProps together
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
