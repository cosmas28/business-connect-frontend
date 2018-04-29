import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/Header';
import SignUpPage from './signup/SignupPage';
import Footer from './common/Footer';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="page-wrapper">
                    <Header />
                    <Route path="/" component={SignUpPage}/>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
