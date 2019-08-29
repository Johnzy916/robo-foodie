import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">React Boilerplate</h1>
            <p>A boilerplate with Webpack, Babel, React, Router, Redux, Jest, Enzyme, Heroku and Firebase integration.</p>
            <button 
                className="btn btn--primary btn--shine"
                onClick={startLogin}>
                    Login with Google
            </button>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);