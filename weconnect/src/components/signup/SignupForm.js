import React from 'react';

const SignUpForm = () => <div className="col-md-4 col-sm-12 col-xs-12 offset-md-4">
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
    </div>;

export default SignUpForm;
