// ./src/components/common/DashboardTitle.js
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @returns {JSX} - render dashboard title bar
 */
const Header = () => <header>
    <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
            <nav className="navbar fixed-top navbar-expand-lg we-menu navbar-light ">
                <Link className="navbar-brand we-logo" to="/">WeConnect</Link>
                <button className="navbar-toggler we-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Signup</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</header>;

export default Header;
