import React from 'react';

const Header = () => (
    <header>
        <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
                <nav className="navbar fixed-top navbar-expand-lg we-menu navbar-light ">
                    <a className="navbar-brand we-logo" href="">WeConnect</a>
                    <button className="navbar-toggler we-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link" href="">Business<span className="sr-only">(current)</span></a></li>
                            <li className="nav-item"><a className="nav-link" href="">Sign Up</a></li>
                            <li className="nav-item"><a className="nav-link" href="">Login</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
);

export default Header;
