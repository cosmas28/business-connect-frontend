import React from 'react';

const DashboardNavBar = () => <header>
    <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
            <nav className="navbar fixed-top navbar-expand-lg account-menu navbar-light ">
                <a className="navbar-brand we-logo">WeConnect</a>
                <button className="navbar-toggler we-toggler" type="button" data-toggle="collapse" data-target="#sideNavbar" aria-controls="sideNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>

                <div className="collapse navbar-collapse" id="sideNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a className="nav-link" href="">Register<span className="sr-only">(current)</span></a></li>
                        <li className="nav-item"><a className="nav-link" href="">View businesses</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                My business
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="">view </a>
                                <a className="dropdown-item" href="">Update </a>
                                <a className="dropdown-item" href="">Delete</a>
                            </div>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="">Logout</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</header>;

export default DashboardNavBar;
