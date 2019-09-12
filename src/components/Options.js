import React from 'react';
import { connect } from 'react-redux';
import Option from './Option';
import { startRemoveAllPlaces } from '../actions/places';

export const Options = props => (
  <div>
    <div className="widget-header">
      <h3
        className="widget-header__title"
      >
        Your Options
      </h3>
      <button
        className="btn btn--tertiary--light btn--link options__btn"
        onClick={props.removeAllPlaces}
      >
        Remove All
      </button>
    </div>
    {props.places.length === 0 &&
      <p 
        className="widget__message"
      >
        Please add an option to get started!
      </p>}
      {
      props.places.map((place, i) => (
        <Option 
          key={`${place.id}`}
          optionText={place.place}
          id={`${place.id}`}
        />
        ))
      }
  </div>
);

const mapStateToProps = state => ({
    places: state.places
});

const mapDispatchToProps = dispatch => ({
    removeAllPlaces: () => dispatch(startRemoveAllPlaces())
});

export default connect(mapStateToProps, mapDispatchToProps)(Options);