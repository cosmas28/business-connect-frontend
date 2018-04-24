import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <Header/>
                <main className="main-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-12 col-xs-12">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <h1>WeConnect</h1>
                                        <p className="landing-content">
                                            Connect with a vibrant, International business network by sign-up in
                                            <i>WeConnect</i> today for <strong>FREE</strong>!!!
                                        </p>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <h1>Resources</h1>
                                        <p className="landing-content">
                                            Find <strong>Resources</strong> and other key assets you may need
                                            to grow your <i>business</i>.
                                        </p>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <h1>Business Search</h1>
                                        <p className="landing-content">
                                            Search our directory of 993 registered business with 200 unique
                                            locations through out <strong>Kenya</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 offset-md-4">
                                <h2>Sign up to register a business</h2>
                                <form>
                                    <div className="form-input-division">
                                        <input type="email" id="email" name="email" className="input-default form-text-input" placeholder="Email Address" />
                                    </div>
                                    <div className="form-input-division">
                                        <input type="text" id="username" name="username" className="input-default form-text-input" placeholder="Username" />
                                    </div>
                                    <div className="form-input-division">
                                        <input type="password" id="password" name="password" className="input-default form-text-input" placeholder="Password" />
                                    </div>
                                    <div className="form-input-division">
                                        <input type="password" id="confirm_pwd" name="confirm_pwd" className="input-default form-text-input" placeholder="Confirm password" />
                                    </div>
                                    <div className="form-input-division">
                                        <button type="submit" className="btn btn-primary input-default form-btn">Sign Up</button>
                                    </div>
                                    <div className="form-input-division">
                                        <a href="">You have an account?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;
