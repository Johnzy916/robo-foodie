import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Robo-Foodie</h1>
            <p className="box-layout__tagline">Take the back-and-forth out of what you're eating!</p>
            <p className="box-layout__sub-tagline">Sign in to save and access your places</p>
            <button 
                className="btn btn--google btn--shine box-layout__button"
                onClick={() => startLogin('google')}>
                    <img
                        className="box-layout__button-logo"
                        src="/images/brands/google-logo.png" alt="google logo" 
                    />
                    Login with Google
            </button>
            <button 
                className="btn btn--github btn--shine box-layout__button"
                onClick={() => startLogin('github')}>
                    <img
                        className="box-layout__button-logo"
                        src="/images/brands/github-logo.png" alt="google logo" 
                    />
                    Login with Github
            </button>
            <button 
                className="btn btn--facebook btn--shine box-layout__button"
                onClick={() => startLogin('facebook')}>
                    <img
                        className="box-layout__button-logo"
                        src="/images/brands/facebook-logo.png" alt="google logo" 
                    />
                    Login with Facebook
            </button>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    startLogin: (type) => dispatch(startLogin(type))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);