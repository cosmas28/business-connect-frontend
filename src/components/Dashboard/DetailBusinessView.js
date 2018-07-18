import React from 'react';
import { connect } from 'react-redux';
import DetailBusinessComponent from './DetailBusinessComponent';
import DashboardNavBar from './../common/DashboardNavBar';
import { fetchBusinessesById, deleteBusiness } from '../../actions/businessActions';
import { addReviews } from '../../actions/reviewsActions';
import AddReviewForm from './addReviewForm';


class DetailBusinessView extends React.Component {
    constructor(props) {
        super(props);
        this.accessToken = sessionStorage.getItem('accessToken');
        this.userId = sessionStorage.getItem('userId');
        this.businessId = this.props.match.params.id;
        this.handleDeleteBusiness = this.handleDeleteBusiness.bind(this);
        this.onSubmitReview = this.onSubmitReview.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    handleDeleteBusiness() {
        this.props.deleteBusiness(this.accessToken, this.businessId);
    }

    componentDidMount() {
        this.props.fetchBusinessesById(this.accessToken, this.businessId);
    }

    onSubmitReview(event) {
        event.preventDefault();
        const input = { review: this.state.review };
        this.props.addReview(this.accessToken, this.businessId, input);
        event.target.reset();
    }

    onInputChange(event) {
        const object = event.target;
        const { value: v, name: key } = object;
        this.setState({ [key]: v });
    }

    render () {
        let canDelete = false;
        if (this.userId === this.props.business.owner_id) {
            canDelete = true;
        }

        return (
            <div className="page-wrapper">
                <DashboardNavBar/>
                <main className="main-body">
                    <div className="container-fluid">
                        {this.props.deleteRes.status_code === 204 ? (
                            <div>
                                {this.props.deleteRes.response_message &&
                                <div className="alert alert-success" role="alert">
                                    {this.props.deleteRes.response_message}
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                }
                            </div>
                        ) : (
                            <div>
                                {this.props.deleteRes.response_message &&
                                <div className="alert alert-danger" role="alert">
                                    {this.props.deleteRes.response_message}
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                }
                            </div>
                        )}
                        <DetailBusinessComponent
                            category={this.props.business.category}
                            ownerName={this.props.business.created_by}
                            canDelete={canDelete}
                            location={this.props.business.location}
                            name={this.props.business.name}
                            onDelete={this.handleDeleteBusiness}
                            summary={this.props.business.summary}
                        />
                        <div className="row">
                            <div className="r-comment">
                                <h3 className="r-comment">4 Comments</h3>
                                <div className="comment-section">
                                    <h5 className="r-username"><strong>Username</strong></h5>
                                    <div>
                                        <span className="business-text">July 9, 2018 AT 18:21</span>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Laudantium veniam exercitationem expedita laborum at
                                        voluptate. Labore, voluptates totam at aut nemo deserunt
                                        rem magni pariatur quos perspiciatis atque eveniet unde
                                    </p>
                                </div>
                                <div className="comment-section">
                                    <h5 className="r-username"><strong>Username</strong></h5>
                                    <div>
                                        <span className="business-text">July 9, 2018 AT 18:21</span>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Laudantium veniam exercitationem expedita laborum at
                                        voluptate. Labore, voluptates totam at aut nemo deserunt
                                        rem magni pariatur quos perspiciatis atque eveniet unde
                                    </p>
                                </div>
                                <AddReviewForm
                                    addReviewHandler={this.onSubmitReview}
                                    handleInputChange={this.onInputChange}
                                />
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
        business: state.business,
        deleteRes: state.businessDelete
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addReview: (accessToken, id, review) => dispatch(addReviews(accessToken, id, review)),
        deleteBusiness: (accessToken, id) => dispatch(deleteBusiness(accessToken, id)),
        fetchBusinessesById: (accessToken, id) => dispatch(fetchBusinessesById(accessToken, id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailBusinessView);
