import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startAddPlace } from '../actions/places';

export class AddOption extends Component {
    state = {
        error: undefined
    }
    

  handleAddPlace = (e) => {
    e.preventDefault();
    const place = e.target.elements.place.value.trim();
    let error;
        if (!place) {
            error = 'Please enter something you\'d like to eat';
        } else if (this.props.places.map(value => value.place).indexOf(place) > -1) {
            error = 'This option already exists!';
            e.target.elements.place.value = "";
        }
        this.setState(() => ({ error }));
        if (place && !error) {
            this.props.startAddPlace(place);
            e.target.elements.place.value = "";
        }
  };

  render() {
    return (
      <div>
        {this.state.error &&
          <p className="add-place-error">
            {this.state.error}
          </p>}
        <form
          className="add-place"
          onSubmit={this.handleAddPlace}
        >
          <input 
            className="add-place__input" 
            type="text" 
            name="place" 
            placeholder="Restaurant, meal, ingredient..."
          />
          <button className="btn btn--primary btn--shine">Add Option</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
   places: state.places 
});

const mapDispatchToProps = dispatch => ({
   startAddPlace: place => dispatch(startAddPlace(place)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(AddOption);