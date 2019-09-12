import React from 'react';
import { connect } from 'react-redux';
import { startRemovePlace } from '../actions/places';

export const Option = props => (
  <div className="option">
    <p className="option__text">{props.optionText}</p>
    <button
      className="btn btn--tertiary--dark btn--link option__btn"
      onClick={() => props.startRemovePlace(props.id)}
    >
      remove
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
   startRemovePlace: id => dispatch(startRemovePlace(id)) 
});

export default connect(undefined, mapDispatchToProps)(Option);