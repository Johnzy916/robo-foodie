const placesReducer = (state = [], action) => {

  switch (action.type) {
    case 'ADD_PLACE':
      return [...state, action.place];
    case 'REMOVE_PLACE':
      return state.filter(({ id }) => id !== action.id);
    case 'REMOVE_ALL_PLACES':
        return [];
    case 'SET_PLACES':
      return action.places;
    default:
      return state;
  }
}

export default placesReducer;