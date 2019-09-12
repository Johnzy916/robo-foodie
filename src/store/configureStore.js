import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import placesReducer from '../reducers/places';
import modalReducer from '../reducers/modal';
import optionReducer from '../reducers/option';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      places: placesReducer,
      option: optionReducer,
      modal: modalReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
