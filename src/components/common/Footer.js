// ./src/components/common/Footer
import React from 'react';

/**
 * @returns {JSX} - render dashboard title bar
 */
const Footer = () => <footer className="site-footer">
        <div className="container">
        <div className="row">
            <div className="col-md-12">
                <i className="fa fa-briefcase" aria-hidden="true"></i> <a href="" target="_blank">Copyright &copy;<script>document.write(new Date().getFullYear());</script></a>
            </div>
        </div>
        </div>
    </footer>;

export default Footer;
