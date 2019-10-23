import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FaRegTimesCircle, FaRegCheckCircle } from "react-icons/fa";

import "./ToastNotification.css";

const renderIcon = status => {
  if (status !== "success") {
    return <FaRegTimesCircle size={30} color="#fff" />;
  }

  return <FaRegCheckCircle size={30} color="#fff" />;
};

class ToastNotification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      message: this.props.toast.message,
      status: this.props.toast.status
    };
  }

  componentDidUpdate({ toast }) {
    if (this.props.toast !== toast) {
      this.setState({
        showToast: true,
        message: this.props.toast.message,
        status: this.props.toast.status
      });
    }

    if (this.state.showToast === true) {
      setTimeout(this.hideToast, 5000);
    }
  }

  hideToast = () => {
    this.setState({
      showToast: false,
      status: "",
      message: ""
    });
  };

  render() {
    const { showToast, message, status } = this.state;

    return (
      <div className={`toast-wrap ${status} ${showToast && "show-toast"}`}>
        <div className={`icon-wrap ${status}`}>{renderIcon(status)}</div>
        <div className={`message-wrap`}>{message}</div>
      </div>
    );
  }
}

ToastNotification.propTypes = {
  toast: PropTypes.object
};

const mapStateToProps = state => ({
  toast: state.toast
});

export default connect(mapStateToProps)(ToastNotification);
