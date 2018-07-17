import React from 'react';
import { connect } from 'react-redux';
import DetailBusinessComponent from './DetailBusinessComponent';
import DashboardNavBar from './../common/DashboardNavBar';
import { fetchBusinessesById, deleteBusiness } from '../../actions/businessActions';


class DetailBusinessView extends React.Component {
    constructor(props) {
        super(props);
        this.accessToken = sessionStorage.getItem('accessToken');
        this.userId = sessionStorage.getItem('userId');
        this.businessId = this.props.match.params.id;
        this.handleDeleteBusiness = this.handleDeleteBusiness.bind(this);
    }

    handleDeleteBusiness() {
        this.props.deleteBusiness(this.accessToken, this.businessId);
    }

    componentDidMount() {
        this.props.fetchBusinessesById(this.accessToken, this.businessId);
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
                    <DetailBusinessComponent
                        category={this.props.business.category}
                        ownerName={this.props.business.created_by}
                        canDelete={canDelete}
                        deleteMsg={this.props.deleteRes.response_message}
                        deleteStatus={this.props.deleteRes.status_code}
                        location={this.props.business.location}
                        name={this.props.business.name}
                        onDelete={this.handleDeleteBusiness}
                        summary={this.props.business.summary}
                    />
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
        deleteBusiness: (accessToken, id) => dispatch(deleteBusiness(accessToken, id)),
        fetchBusinessesById: (accessToken, id) => dispatch(fetchBusinessesById(accessToken, id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailBusinessView);
