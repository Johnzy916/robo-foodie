import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddOption from './AddOption';
import Options from './Options';
import ChoosePlace from './ChoosePlace';
import { isFirstTimeUser } from '../actions/auth';

export const DashboardPage = ({ isFirstTimeUser, closeFirstTimeAddon }) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <div className="page-header__content">
          <ChoosePlace />
          { isFirstTimeUser &&
            <div className="addon">
              <h3 className="addon__title">
                I see it's your first time here!
              </h3>
              <p className="addon__text">
                Add the places or foods you'd like to eat and press the button to let Robo decide!
              </p>
              <button
                className="addon__close-btn"
                onClick={closeFirstTimeAddon}
              >
                &times;
              </button>
            </div>
          }
        </div>
      </div>
    </div>
    <div className="content-container">
      <div className="widget">
        <Options />
        <AddOption />
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  isFirstTimeUser: state.auth.isFirstTimeUser
});

const mapDispatchToProps = dispatch => ({
  closeFirstTimeAddon: () => dispatch(isFirstTimeUser(false))
});


export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
