// ./src/components/Dashboard/UpdateBusinessContainers.js
import React from 'react';
import { connect } from 'react-redux';

import DashboardNavBar from './../common/DashboardNavBar';
import DashboardTitle from './../common/DashboardTitle';
import * as actions from '../../actions/businessActions';
import { deleteResponseMessages } from '../../actions/responseMessage';

export class UpdateBusiness extends React.Component {

    /**
     *
     * @param {Object} props - passed properties
     */
    constructor(props) {
        super(props);
        this.state = {
            category: this.props.category,
            location: this.props.location,
            name: this.props.name,
            summary: this.props.summary
        };
        this.accessToken = sessionStorage.getItem('accessToken');
        this.businessId = this.props.match.params.id;
        this.updateBusinessHandler = this.updateBusinessHandler.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    // event handler for business update input change
    handleInputChange(event) {
        const object = event.target;
        const { value: v, name: key } = object;
        this.setState({ [key]: v });
    }

    // event handler for business registration form onSubmit event
    updateBusinessHandler(event) {
        event.preventDefault();
        const newInput = {
            category: this.state.category,
            location: this.state.location,
            name: this.state.name,
            summary: this.state.summary
        };
        this.props.updateBusiness(this.accessToken, this.businessId, newInput);
    }

    componentDidMount() {
        this.props.fetchBusinessesById(this.accessToken, this.businessId);
    }

    // executed just before the component gets removed from the DOM
    componentWillUnmount() {

        // delete any flash message on responseMessage props
        this.props.deleteMessage();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            category: nextProps.business.category,
            location: nextProps.business.location,
            name: nextProps.business.name,
            summary: nextProps.business.summary
        });
    }

    render() {
        return (
            <div className="page-wrapper">
                <DashboardNavBar/>
                <main className="main-body">
                    <div className="container-fluid">
                        <DashboardTitle title="Update Business"/>
                        <div className="row no-gutters">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="create-business-page">
                                    {this.props.message.status_code === 200 ? (
                                        <div>
                                            {this.props.message.response_message &&
                                            <div className="alert alert-success" role="alert">
                                                {this.props.message.response_message}
                                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
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
                                    <form onSubmit={this.updateBusinessHandler}>
                                        <div className="form-input-division">
                                            <input type="text"
                                                name="name"
                                                className="test register-form-input"
                                                placeholder="Business Name"
                                                onChange={this.handleInputChange}
                                                value={this.state.name || ''}
                                                required
                                            />
                                        </div>
                                        <div className="form-input-division">
                                            <input type="text"
                                                name="category"
                                                className="register-form-input"
                                                placeholder="Business Category"
                                                onChange={this.handleInputChange}
                                                value={this.state.category || ''}
                                                required
                                            />
                                        </div>
                                        <div className="form-input-division">
                                            <input type="text"
                                                name="location"
                                                className="register-form-input"
                                                placeholder="Business Location"
                                                onChange={this.handleInputChange}
                                                value={this.state.location || ''}
                                                required
                                            />
                                        </div>
                                        <div className="form-input-division">
                                            <textarea name="summary"
                                                    className="register-form-input"
                                                    placeholder="Business Description"
                                                    rows="3"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.summary || ''}
                                                    required
                                            />
                                        </div>
                                        <div className="form-input-division">
                                            <button type="submit" className="btn btn-primary input-default form-btn">Update Business</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

// Maps state from store to props
const mapStateToProps = state => {
    return {
        business: state.business,
        message: state.messages
    };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        deleteMessage: () => dispatch(deleteResponseMessages()),
        fetchBusinessesById: (accessToken, id) => dispatch(actions.fetchBusinessesById(accessToken, id)),
        updateBusiness: (accessToken, id, newData) => dispatch(actions.updateBusiness(accessToken, id, newData))
    };
};

// use connect to put mapStateToProps and mapDispatchToProps together
export default connect(mapStateToProps, mapDispatchToProps)(UpdateBusiness);
