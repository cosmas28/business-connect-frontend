import React from 'react';
import { connect } from 'react-redux';
import DetailBusinessComponent from './DetailBusinessComponent';
import DashboardNavBar from './../common/DashboardNavBar';
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
                    <DetailBusinessComponent
                        category={this.props.business.category}
                        location={this.props.business.location}
                        name={this.props.business.name}
                        summary={this.props.business.summary}
                    />
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
