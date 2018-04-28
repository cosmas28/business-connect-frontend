import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'confirm_password': '',
            'email': '',
            'first_name': '',
            'last_name': '',
            'password': '',
            'username': ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit (event) {
        event.preventDefault();
        const input = {
            'confirm_password': this.state.confirm_password,
            'email': this.state.email,
            'first_name': this.state.first_name,
            'last_name': this.state.last_name,
            'password': this.state.password,
            'username': this.state.username
        };
        this.props.registerUser(input);
        // event.target.reset();
    }

    render() {
        return (
            <div className="col-md-6 col-sm-12 col-xs-12 offset-md-2">
                <h2>Sign up to register a business</h2>
                <article className="alert alert-success" role="alert">
                    {this.props.message}
                </article>
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col">
                            <input type="email"
                                   className="input-default form-text-input"
                                   placeholder="Email Address"
                                   value={ this.state.email }
                                   onChange={event => this.setState({ 'email': event.target.value }) }
                            />
                        </div>
                        <div className="col">
                            <input type="text"
                                   className="input-default form-text-input"
                                   placeholder="Username"
                                   value={ this.state.username }
                                   onChange={event => this.setState({ 'username': event.target.value }) }
                            />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col">
                            <input type="text"
                                   className="input-default form-text-input"
                                   placeholder="First name"
                                   value={ this.state.first_name }
                                   onChange={event => this.setState({ 'first_name': event.target.value }) }
                            />
                        </div>
                        <div className="col">
                            <input type="text"
                                   className="input-default form-text-input"
                                   placeholder="Last name"
                                   value={ this.state.last_name }
                                   onChange={event => this.setState({ 'last_name': event.target.value }) }
                            />
                        </div>
                    </div>
                    <hr/>
                    <div className="form-input-division">
                        <input type="password"
                               className="input-default form-text-input"
                               placeholder="Password"
                               value={ this.state.password }
                               onChange={event => this.setState({ 'password': event.target.value }) }
                        />
                    </div>
                    <div className="form-input-division">
                        <input type="password"
                               className="input-default form-text-input"
                               placeholder="Confirm password"
                               value={ this.state.confirm_password }
                               onChange={event => this.setState({ 'confirm_password': event.target.value }) }
                        />
                    </div>
                    <div className="form-input-division">
                        <button type="submit" className="btn btn-primary input-default form-btn">Sign Up</button>
                    </div>
                    <div className="form-input-division">
                        <a href="">You have an account?</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;
