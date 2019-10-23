// ./src/components/common/NotFoundPage.js
import React from "react";

class PageNotFound extends React.Component {
  // renders JSX for dashboard navigation bar
  render() {
    return (
      <div>
        <main className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 com-xs-12">
                <h1>Page not found</h1>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default PageNotFound;
