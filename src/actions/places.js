import database from '../firebase/firebase.js';
import { checkFirstTimeUser } from './auth';

// ADD_PLACE ACTION
export const addPlace = (place) => ({
  type: 'ADD_PLACE',
  place
});

// WRITE PLACE TO DATABASE / DISPATCH ACTION
export const startAddPlace = (place = '') => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    
    return database.ref(`users/${uid}/places`).push(place)
      .then(ref => {
        dispatch(addPlace({
          id: ref.key, 
          place
        }));
      }).catch(error => {
        console.log('Couldn\'t add place > ', error);
      });
  };
};

// REMOVE_PLACE ACTION
export const removePlace = (id) => ({
  type: 'REMOVE_PLACE',
  id
});

// REMOVE PLACE FROM THE DATABASE / DISPATCH ACTION
export const startRemovePlace = (id = undefined) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/places/${id}`).remove()
      .then(() => {
        dispatch(removePlace(id));
      }).catch(error => console.log('couldn\'t remove place > ', error));
  };
};

// REMOVE_ALL_PLACES ACTION
export const removeAllPlaces = () => ({
  type: 'REMOVE_ALL_PLACES',
});

// REMOVE ALL PLACES FROM THE DATABASE / DISPATCH ACTION
export const startRemoveAllPlaces = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/places`).remove()
      .then(() => {
        dispatch(removeAllPlaces());
      }).catch(error => console.log('couldn\'t remove all places > ', error));
  };
};

// SET_PLACE ACTION
export const setPlaces = (places) => ({
  type: 'SET_PLACES',
  places
});

// FETCH PLACES FROM DATABASE / DISPATCH ACTION
export const checkPlaces = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
     return database.ref(`users/${uid}/places`).once('value')
      .then(snapshot => {
        let places = [];
        if (snapshot.hasChildren()) {
          snapshot.forEach(childSnapshot => {
            const place = childSnapshot.val();
            places.push({
              id: childSnapshot.key,
              place
            });
          });
          dispatch(setPlaces(places));
        } else {
          return new Promise(async (resolve, reject) => {
            await dispatch(startAddPlace('Taco Bell'));
            await dispatch(startAddPlace('Pizza Hut'));
            await dispatch(startAddPlace('Subway'));
            await dispatch(checkFirstTimeUser());
            resolve();
          });
        }
      }
    )
  }
}

