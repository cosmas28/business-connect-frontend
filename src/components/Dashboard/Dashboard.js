// ./src/components/Dashboard/Dashboard.js
import React from 'react';
import { connect } from 'react-redux';
import JwPagination from 'jw-react-pagination';

import DashboardLayout from '../../components/DashboardLayout';
import OneBusinessView from './ViewBusiness/OneBusinessView';
import { fetchBusinesses, deleteBusiness, searchBusinesses } from '../../actions/businessActions';

import './Dashboard.css';

export class Dashboard extends React.Component {

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

        // bind the onChangePage method to this React component
        this.onChangePage = this.onChangePage.bind(this);

        // store example items and current page of items in local state
        this.state = { pageOfItems: [] };
    }

    // execute fetchBusinesses() after the component did mount on the dom
    componentDidMount() {
        this.props.fetchBusinesses(this.accessToken);
    }

    // executed just before the component gets removed from the DOM
    componentWillUnmount() {

        // delete any flash message on responseMessage props
        this.props.deleteMessage();
    }

    // event handler for business registration input change
    handleInputChange(event) {
        const object = event.target;
        const { value: v, name: key } = object;
        this.setState({ [key]: v });
    }

    // event handler for business registration form onSubmit event
    handleSearch(event) {
        event.preventDefault();
        // this.props.searchBusinesses(this.accessToken, this.state.search);
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
        const authUser = sessionStorage.getItem('userId');

        return (
            <DashboardLayout pageTitle="Home">
                <main className="main-body">
                    <div className="container-fluid">
                        <div className="row no-gutters">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="main-view-page">
                                    <div onclassName="row no-gutters">
                                        {!this.props.businesses &&
                                            <p>You have not registered a business.Please register one.</p>
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
                                items={this.props.businesses}
                                pageSize={5}
                                onChangePage={this.onChangePage}
                            />
                        </div>
                    </div>
                </main>
            </DashboardLayout>
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
        fetchBusinesses: accessToken => dispatch(fetchBusinesses(accessToken)),
        searchBusinesses: (accessToken, search) => dispatch(searchBusinesses(accessToken, search))
    };
};

// use connect to put mapStateToProps and mapDispatchToProps together
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
