import React from 'react';
import { connect } from 'react-redux';
import { selectOption } from '../actions/option';
import { showModal } from '../actions/modal';

export const ChoosePlace = ({ 
        places,
        selectOption, 
        showModal, 
        isFirstTimeUser, 
        firstTimeModal }) => {
    
    const handleMakeDecision = () => {
        const randomNum = Math.floor(Math.random() * places.length);
        const option = places[randomNum];
        selectOption(option);
        showModal(option);
    }

    return (
      <div>
        <button 
          disabled={places.length < 2}
          onClick={handleMakeDecision}
          className="btn btn--secondary btn--shine big-button"
        >
          What are we eating?
        </button>
      </div>
    );
};

const mapStateToProps = state => ({
   places: state.places,
});

const mapDispatchToProps = dispatch => ({
    selectOption: option => dispatch(selectOption(option)),
    showModal: option => dispatch(showModal({
      contentLabel: 'Confirm Selection',
      header: `It looks like we'll be eating:`,
      subtitle: `${option.place}`,
      confirmText: 'Great!',
      confirmType: 'confirm',
    }))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChoosePlace);