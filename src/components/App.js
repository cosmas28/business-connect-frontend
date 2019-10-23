import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignUpPage from "./signup/SignupPage";
import SignInPage from "./signin/SigninPage";
import ResetPasswordPage from "./resetPassword/ResetPasswordPage";
import ConfirmEmail from "./resetPassword/ConfirmEmail";
import Dashboard from "./Dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import DetailBusinessView from "./Dashboard/DetailBusinessView";
import PageNotFound from "./common/NotFoundPage";
import ToastNotification from "./ToastNotification";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.loggedIn = sessionStorage.getItem("loggedIn");
  }

  render() {
    return (
      <BrowserRouter>
        <div className="page-wrapper">
          <ToastNotification />
          <Switch>
            <Route exact path="/" component={SignUpPage} />
            <Route exact path="/login" component={SignInPage} />
            <Route
              exact
              path="/reset_password/password/:token"
              component={ResetPasswordPage}
            />
            <Route
              exact
              path="/reset_password/confirm_email"
              component={ConfirmEmail}
            />
            <ProtectedRoute
              path="/dashboard"
              loggedIn={this.loggedIn}
              component={Dashboard}
            />
            <Route path="/businesses/:id" component={DetailBusinessView} />
            <Route component={PageNotFound} />
            <Route path="/404" component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
